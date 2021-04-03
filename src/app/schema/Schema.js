import SchemaMeta, {PrefSchema} from './SchemaMeta.js'
import Data from '../project/data/Data.js'
import DataSchema from '../project/data/DataSchema.js'
import ClassHelper from '../utils/ClassHelper.js'
import AttributeType from '../pobject/AttributeType.js'
import StringHelper from '../utils/StringHelper.js'

/**
 * @class {Schema}
 */
class Schema {
    /**
     * @param {string} prefix
     * @param {SchemaMeta} rootMeta
     * @returns {SchemaMeta}
     */
    static getMeta(prefix = '', rootMeta = null) {
        !rootMeta && (rootMeta = SchemaMeta)
        let resultMeta = {}
        for (let eMetaData in rootMeta) {
            if (rootMeta.hasOwnProperty(eMetaData)) {
                const {type, meta, prototype} = rootMeta[eMetaData]
                const metaPrefix = `${prefix}${eMetaData}`
                resultMeta[metaPrefix] = {
                    prototype: prototype || this.getPrototypeOf(type),
                    type: type || prototype
                }
                const subMeta = meta
                if (subMeta) {
                    resultMeta = Object.assign(resultMeta, this.getMeta(`${metaPrefix}.`, subMeta))
                }
            }
        }
        return resultMeta
    }

    /**
     * Get the prototype from the given type
     * @param {Class|string} type
     * @return {Class|string|null}
     */
    static getPrototypeOf(type) {
        let prototype = type
        if (!_.isString(type) && type !== Array) {
            prototype = this.findDataPrototypeOf(type)
            if (!prototype) {
                throw new TypeError(`${type.name} must extends Data type class!`)
            }
        }
        return prototype
    }

    /**
     * Find parent Data class
     * @param {Class} type
     * @return {Class|null}
     */
    static findDataPrototypeOf(type) {
        const prototype = Object.getPrototypeOf(type)
        if (prototype && prototype.name) {
            if (prototype.name.match(/^[a-zA-Z]+Data$/)) {
                return prototype
            } else {
                return this.findDataPrototypeOf(prototype)
            }
        }
        return null
    }

    /**
     * @param {string} key
     * @param {Object|Array|Data} data
     * @param {SchemaMeta} schema
     * @param {string} schemaPrefix
     * @param {{serialize: boolean}} options
     * @param {Object|Array|Data} parent
     * @param {string|Class} parentType
     * @return {Object|Array}
     * @todo: Refactor/Simplify the implementation
     */
    static async validate(key, data, schema, options, schemaPrefix = '', parent = null, parentType = null) {
        const schemaMeta = `${schemaPrefix}${key}`
        let schemaMetaProto = schema[schemaMeta]
        if (!schemaMetaProto) {
            schemaMetaProto = this.getPrefSchema(key, parentType)
        }
        if (schemaMetaProto) {
            let prototype = options.serialize ? schemaMetaProto.prototype : schemaMetaProto.type
            prototype = AttributeType.extractPrototype(prototype, parent)
            if (!_.isString(prototype)) {
                let result
                if (prototype.prototype instanceof Data) {
                    if (options.serialize) {
                        if (data && DataSchema.isExcluded(data.constructor)) {
                            result = undefined // element to be excluded from the exported data
                        } else {
                            result = new prototype()
                            data && data.setDataId(DataSchema.getId(data.constructor))
                        }
                    } else {
                        result = DataSchema.newInstance(data && data.dataId, prototype)
                    }
                } else {
                    result = new prototype()
                }
                if (result) {
                    const extractParentType = AttributeType.extractPrototype(schemaMetaProto.prototype, parent)
                    const parentTypeName = AttributeType.extractPrototypeName(schemaMetaProto.prototype, parent) || schemaMetaProto.prototype
                    const props = this.getProperties(data, extractParentType)
                    for (const iProp in props) {
                        const prop = props[iProp]
                        if(prop.value) {
                            const subResult = await this.validate(prop.key, prop.value, schema, options, `${schemaMeta}.`, data, parentTypeName)
                            if (subResult) {
                                if (_.isArray(result)) {
                                    result.push(subResult)
                                } else {
                                    const setter = ClassHelper.getSetter(result, prop.key)
                                    let subResultMerge = subResult
                                    //not override elements added on the instantiation
                                    if (_.isArray(subResult)) {
                                        const concatAttr = `concat${StringHelper.capFirstLetter(prop.key)}`
                                        if(_.isFunction(result[concatAttr])){
                                            result[concatAttr](subResultMerge)
                                        }else{
                                            throw new TypeError(`Method ${concatAttr} not defined for ${result.constructor.name}`)
                                        }
                                    }else{
                                        await result[setter](subResultMerge)
                                    }
                                }
                            } else if (subResult === null && !_.isObject(prop.value)) {
                                const setter = ClassHelper.getSetter(result, prop.key)
                                await result[setter](Schema.getValue(`${schemaMeta}.${prop.key}`, prop.value, result, prop.key, parentTypeName))
                            }
                        }
                    }
                }
                return result
            }
        } else {
            throw new TypeError(`${schemaMeta} must be defined in the schema (parentType: ${parentType})`)
        }
        return null
    }

    /**
     * @param {Object} object
     * @param {Class} prototype
     * @returns {{key: string, value: *}[]}
     */
    static getProperties(object, prototype) {
        if (prototype === Array) {
            return _.isArray(object) ? object.map(value => ({key: 'element', value})) : []
        } else {
            const tempPrototype = new prototype()
            return Object.getOwnPropertyNames(tempPrototype)
                .map(prop => {
                    let value
                    if (object) {
                        if (object.constructor === Object) {
                            value = object[prop]
                        } else {
                            const getter = ClassHelper.getGetter(object, prop)
                            value = object[getter]()
                        }
                    }
                    return {key: prop, value}
                })
        }
    }

    /**
     * Get the actual value from the schema using the given schema meta field and value.
     * Used to help validate the value and correct it according to the format/type
     * @param {String} schemaMeta
     * @param {number|string|boolean|null|undefined} value
     * @param {Object} data
     * @param {string} key
     * @param {string} parentType
     */
    static getValue(schemaMeta, value, data, key, parentType) {
        const schema = this.getMeta()
        let schemaMetaProto = schema[schemaMeta] || this.getPrefSchema(key, parentType)
        let {prototype} = schemaMetaProto
        prototype = AttributeType.extractPrototype(prototype, data)
        let newValue
        switch (prototype) {
            case 'number':
                newValue = parseFloat(value) || null
                break
            case 'string':
                newValue = _.isString(value) ? value : ''
                break
            case 'boolean':
                newValue = value === 'false' ? false : !!value
                break
            default:
                if(!_.isString(prototype)){
                    newValue = undefined
                }else{
                    throw new TypeError(`Schema type ${prototype} not supported`)
                }
        }
        return newValue
    }

    /**
     * @param {string} key
     * @param {string|Class} type
     * @return {string}
     */
    static getPrefSchema(key, type) {
        const prefSchema = PrefSchema[type]
        let schemaMetaProto
        if (prefSchema) {
            schemaMetaProto = prefSchema[key]
            if(schemaMetaProto){
                schemaMetaProto.prototype = schemaMetaProto.type
            }
        }else if(key === 'element' && AttributeType.isArrayType(type)){
            const elementArrayProto = AttributeType.extractArrayElementPrototype(type)
            if(elementArrayProto){
                schemaMetaProto = {
                    type: elementArrayProto,
                    prototype: elementArrayProto
                }
            }
        }
        return schemaMetaProto
    }
}

export default Schema