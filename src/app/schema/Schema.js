import SchemaMeta from './SchemaMeta.js'
import Data from '../project/data/Data.js'
import DataSchema from '../project/data/DataSchema.js'
import ClassHelper from '../utils/ClassHelper.js'

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
     * @return {Object|Array}
     * @todo: Refactor/Simplify the implementation
     */
    static async validate(key, data, schema, options, schemaPrefix = '') {
        const schemaMeta = `${schemaPrefix}${key}`
        const schemaMetaProto = schema[schemaMeta]
        if (schemaMetaProto) {
            const prototype = options.serialize ? schemaMetaProto.prototype : schemaMetaProto.type
            if (!_.isString(prototype)) {
                let result
                if (prototype.prototype instanceof Data) {
                    if (options.serialize) {
                        result = new prototype()
                        data && data.setDataId(DataSchema.getId(data.constructor))
                    } else {
                        result = DataSchema.newInstance(data && data.dataId, prototype)
                    }
                } else {
                    result = new prototype()
                }
                if (result) {
                    const props = this.getProperties(data, schemaMetaProto.prototype)
                    for (const iProp in props) {
                        const prop = props[iProp]
                        const subResult = await this.validate(prop.key, prop.value, schema, options, `${schemaMeta}.`)
                        if (subResult) {
                            if (_.isArray(result)) {
                                result.push(subResult)
                            } else {
                                const setter = ClassHelper.getSetter(result, prop.key)
                                await result[setter](subResult)
                            }
                        } else {
                            const setter = ClassHelper.getSetter(result, prop.key)
                            await result[setter](Schema.getValue(`${schemaMeta}.${prop.key}`, prop.value))
                        }
                    }
                }
                return result
            }
        } else {
            throw new TypeError(`${schemaMeta} must be defined in the schema`)
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
     */
    static getValue(schemaMeta, value) {
        const schema = this.getMeta()
        const {prototype} = schema[schemaMeta]
        let newValue
        switch (prototype) {
            case 'number':
                newValue = value !== null && value !== undefined ? parseFloat(value) : null
                break
            case 'string':
                newValue = _.isString(value) ? value : ''
                break
            case 'boolean':
                newValue = value === 'false' ? false : !!value
                break
            default:
                newValue = ''
        }
        return newValue
    }
}

export default Schema