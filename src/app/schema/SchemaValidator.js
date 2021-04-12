import Schema from './Schema.js'
import PrimitiveHelper from '../utils/PrimitiveHelper.js'
import ObjectHelper from '../utils/ObjectHelper.js'
import DataHelper from '../utils/DataHelper.js'
import AttributeType from '../pobject/AttributeType.js'
import {PrefSchema} from './SchemaMeta.js'
import Data from '../project/data/Data.js'

class SchemaValidator {

    static instance

    constructor() {
        this.schema = Schema.getMeta()
    }

    /**
     * @param {string} path
     * @param {*} data
     * @param {*} parentPathData
     * @return {*}
     */
    async validate(path, data, parentPathData = null) {
        const pathPrototype = this.getPathPrototype(path, parentPathData)
        const pathDynamicPrototypeName = this.getPathDynamicPrototypeName(path, parentPathData)
        const dataValidated = await this.validateByPrototype(data, pathPrototype)
        if (!_.isString(pathPrototype) && dataValidated) {
            const props = ObjectHelper.getProperties(data, pathPrototype)
            for (const iProp in props) {
                const prop = props[iProp]
                const childPath = `${path}.${prop.key}` + (pathDynamicPrototypeName ? `[${pathDynamicPrototypeName}]` : '')
                const childDataValidated = await this.validate(childPath, prop.value, data)
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
     * @param {*} data
     * @param {*} prototype
     * @return {*}
     */
    async validateByPrototype(data, prototype) {
        let dataValidated = null
        if(data !== null && data !== undefined){
            if (_.isString(prototype)) {
                dataValidated = PrimitiveHelper.validate(data, prototype)
            } else if (prototype.prototype instanceof Data) {
                dataValidated = DataHelper.validate(data, prototype)
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
            throw new TypeError(`${path} must be defined in the schema`)
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
                let preParentSchema = PrefSchema[pathParentSchema.prototype] ||
                    (path.match(/\[(\d+)]/) && PrefSchema[path.match(/\[(\d+)]/)[1]])
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