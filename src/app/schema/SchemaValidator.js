import Schema from './Schema.js'
import PrimitiveHelper from '../utils/PrimitiveHelper.js'
import ObjectHelper from '../utils/ObjectHelper.js'
import DataHelper from '../utils/DataHelper.js'
import AttributeType from '../pobject/AttributeType.js'
import {PrefSchema} from './SchemaMeta.js'
import Data from '../project/data/Data.js'
import SystemError from '../exception/type/SystemError.js'

class SchemaValidator {

    static instance

    constructor() {
        this.schema = Schema.getMeta()
    }

    /**
     * @param {string} path
     * @param {Object|Array} data
     * @param {boolean} forGame
     * @param {Object|Array} parentPathData
     * @return {*}
     */
    async validate(path, data, forGame, parentPathData = null) {
        const pathPrototype = this.getPathPrototype(path, parentPathData)
        const pathDynamicPrototypeName = this.getPathDynamicPrototypeName(path, parentPathData)
        const dataValidated = await this.validateByPrototype(data, pathPrototype, forGame)
        if (!_.isString(pathPrototype) && dataValidated !== null && dataValidated !== undefined) {
            const props = ObjectHelper.getProperties(data, pathPrototype)
            for (const iProp in props) {
                const prop = props[iProp]
                const childPath = `${path}.${prop.key}` + (pathDynamicPrototypeName ? `[${pathDynamicPrototypeName}]` : '')
                const childDataValidated = await this.validate(childPath, await prop.value, forGame, data)
                if (childDataValidated !== null &&
                    childDataValidated !== undefined &&
                    prop.key !== 'dataId') {
                    await ObjectHelper.setProperty(dataValidated, prop.key, childDataValidated)
                }
            }
        }
        return dataValidated
    }

    /**
     * @param {string} path
     * @param {Object} data1
     * @param {Object} data2
     * @param {*} parentPathData
     * @param {string} indexedPath
     * @TODO: make it more readable
     *
     * @return {*}
     */
    async compare(path, data1, data2, parentPathData = null, indexedPath = path) {
        let result = {}
        const pathPrototype = this.getPathPrototype(path, parentPathData)
        const pathDynamicPrototypeName = this.getPathDynamicPrototypeName(path, parentPathData)
        const propsData1 = ObjectHelper.getProperties(await data1, pathPrototype)
        const propsData2 = ObjectHelper.getProperties(await data2, pathPrototype)
        for (const iProp in propsData2) {
            const propData2 = propsData2[iProp]
            const propData1 = propsData1 ? propsData1[iProp] : null
            const childPath = `${path}.${propData2.key}` + (pathDynamicPrototypeName ? `[${pathDynamicPrototypeName}]` : '')
            const childIndexedPath = `${indexedPath}.${propData2.index !== null ? propData2.index : propData2.key}`
            const childDataCompared = await this.compare(
                childPath, propData1 ? await propData1.value : null, await propData2.value, data2, childIndexedPath)
            if (childDataCompared !== null &&
                childDataCompared !== undefined) {
                result = {...result, ...childDataCompared}
            }
        }
        if ((data1 && !_.isObject(data2)) || (_.isObject(data2) && !data1)) {
            if (data1 !== data2) {
                result[indexedPath] = {path, data: await data2}
            }
        }
        return result
    }

    /**
     * @param {Object} target
     * @param {string} indexedPath
     * @param {string} schemaPath
     * @param {*} data
     * @return {*}
     */
    async updateFromPath(target, indexedPath, schemaPath, data) {
        const indexedPathSplit = indexedPath.split('.')
        let targetElement = target
        let parentTargetElement = null
        if (indexedPathSplit) {
            indexedPathSplit.splice(0, 1)
        }
        for (const iIndexedPath in indexedPathSplit) {
            const indexedPathElement = indexedPathSplit[iIndexedPath]
            parentTargetElement = targetElement
            if (targetElement !== null && targetElement !== undefined) {
                targetElement = parentTargetElement[indexedPathElement]
                if (parseInt(iIndexedPath) === indexedPathSplit.length - 1) {
                    if (data === undefined) {
                        if (_.isArray(targetElement)) {
                            targetElement.splice(parseInt(indexedPathElement), 1)
                        } else if (targetElement) {
                            parentTargetElement[indexedPathElement] = undefined
                        }
                    } else {
                        await ObjectHelper.setProperty(parentTargetElement, indexedPathElement, data)
                    }
                }
            }
        }
    }

    /**
     * @param {*} data
     * @param {*} prototype
     * @param {boolean} forGame
     * @return {*}
     */
    async validateByPrototype(data, prototype, forGame) {
        let dataValidated = null
        if (data !== null && data !== undefined) {
            if (_.isString(prototype) || _.isNumber(prototype)) {
                dataValidated = PrimitiveHelper.validate(data, prototype)
            } else if (prototype.prototype instanceof Data) {
                dataValidated = DataHelper.validate(data, prototype, forGame)
            } else {
                dataValidated = new prototype()
            }
        }
        return dataValidated
    }

    /**
     * @param {string} path
     * @param {*} parentPathData
     * @return {string|Class}
     */
    getPathPrototype(path, parentPathData) {
        const pathSchema = this.getPathSchema(path)
        let prototype
        if (pathSchema) {
            prototype = pathSchema.prototype
        } else {
            throw new SystemError(`${path} must be defined in the schema`)
        }
        return AttributeType.extractPrototype(prototype, parentPathData)
    }

    /**
     * @param {string} path
     * @param {*} parentPathData
     * @return {string}
     */
    getPathDynamicPrototypeName(path, parentPathData) {
        const pathSchema = this.getPathSchema(path)
        if (pathSchema) {
            return AttributeType.extractDynamicPrototypeName(pathSchema.prototype, parentPathData)
        }
    }

    /**
     * @param {string} path
     * @return {{type: *, prototype: *}}
     */
    getPathSchema(path) {
        let pathSchema = this.schema[path]
        if (!pathSchema) {
            const pathParentSchema = this.getPathSchema(Schema.getParentPath(path))
            if (pathParentSchema) {
                let preParentSchema = this.getPreParentSchema(path, pathParentSchema.prototype)
                if (preParentSchema) {
                    const preSchema = preParentSchema[Schema.getPathKey(path).replace(/\[\d+]/, '')]
                    if (preSchema) {
                        return {
                            type: preSchema.type,
                            prototype: preSchema.type
                        }
                    }
                }
            }
        }
        return pathSchema
    }

    /**
     * @param {string} path
     * @param {*} prototype
     * @return {*}
     */
    getPreParentSchema(path, prototype) {
        if (AttributeType.isArrayType(prototype)) {
            return {
                element: {
                    type: AttributeType.getArrayElementType(prototype)
                }
            }
        }
        const preDefinedPrototype = PrefSchema[prototype]
        if (preDefinedPrototype) {
            return preDefinedPrototype
        }
        const dynamicTypeMatch = path.match(/\[(\d+)]/)
        if(dynamicTypeMatch){
            const dynamicType = parseInt(path.match(/\[(\d+)]/)[1])
            if (AttributeType.isArrayType(dynamicType)) {
                return {
                    element: {
                        type: AttributeType.getArrayElementType(dynamicType)
                    }
                }
            } else {
                return PrefSchema[dynamicType]
            }
        }
    }

    /**
     * @return {SchemaValidator}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default SchemaValidator