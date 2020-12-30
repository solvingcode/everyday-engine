define(function (require) {

    const XmlHelper = require('../utils/XmlHelper.js')
    const Schema = require('../project/schema/Schema.js')
    const Data = require('../project/data/Data.js')
    const DataSchema = require('../project/data/DataSchema.js')

    /**
     * Utils to manage the storage of data over time.
     * Handle clones and manage conflicts
     * @property {Map<string, *>} data
     */
    class Storage {

        /**
         * @type {Storage}
         */
        static instance

        constructor() {
            this.data = {}
        }

        /**
         * @returns {Storage}
         */
        static get() {
            if (!Storage.instance) {
                Storage.instance = new Storage()
            }
            return Storage.instance
        }

        /**
         * Update the storage (merge data)
         * @param {string} type
         * @param {Object|Array} data
         */
        update(type, data) {
            this.data[type] = _.cloneDeep(data)
            return this
        }

        /**
         * Update the storage and validate data
         * @param {string} type
         * @param {Object|Array} data
         * @param {boolean} serialize
         */
        updateAndValidate(type, data, serialize = true){
            const validData = this.validate(type, data, Schema.getMeta(), {serialize})
            this.data[type] = _.cloneDeep(validData[type])
            return this
        }

        /**
         * Load and validate data to the given target
         * @param {string} type
         * @param {Object|Array} data
         * @param {Object} target
         */
        load(type, data, target){
            this.updateAndValidate(type, data[type], false)
            target.set(_.cloneDeep(this.data[type]))
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
        validate(key, data, schema, options, schemaPrefix = ''){
            const schemaMeta = `${schemaPrefix}${key}`
            const schemaMetaProto = schema[schemaMeta]
            if (schemaMetaProto) {
                const prototype = options.serialize ? schemaMetaProto.prototype : schemaMetaProto.type
                if(!_.isString(prototype)){
                    let result
                    if(prototype.prototype instanceof Data){
                        if(options.serialize){
                            result = new prototype()
                            data && data.setDataId(DataSchema.getId(data.constructor))
                        }else{
                            result = DataSchema.newInstance(data.dataId, prototype)
                        }
                    }else{
                        result = new prototype()
                    }
                    result && this.getProperties(data, schemaMetaProto.prototype)
                        .forEach(prop => {
                            const subResult = this.validate(prop.key, prop.value, schema, options,`${schemaMeta}.`)
                            if (subResult) {
                                if(_.isArray(result)){
                                    result.push(subResult)
                                }else{
                                    result = Object.assign(result, subResult)
                                }
                            } else {
                                result[prop.key] = Schema.getValue(`${schemaMeta}.${prop.key}`, prop.value)
                            }
                        })
                    return key !== 'element' ? {[key]: result} : result
                }
            }else{
                throw new TypeError(`${schemaMeta} must be defined in the schema`)
            }
            return null
        }

        /**
         * @param {Object} object
         * @param {Class} prototype
         * @returns {{key: string, value: *}[]}
         */
        getProperties(object, prototype) {
            if(prototype === Array){
                return _.isArray(object) ? object.map(value => ({key: 'element', value})) : []
            }else {
                const tempPrototype = new prototype()
                return Object.getOwnPropertyNames(tempPrototype)
                    .map(prop => ({key: prop, value: object && object[prop]}))
            }
        }

        /**
         * Get data from the storage
         * @param {String} type
         * @return {Object}
         */
        fetch(type) {
            const data = this.data[type]
            return data && _.cloneDeep(data)
        }

        /**
         * Export all data to the given format
         * @param {Storage.format} format
         * @return {string}
         */
        export(format){
            switch (format) {
                case Storage.format.XML:
                    return XmlHelper.export(this.data)
                default:
                    throw new TypeError(`Export format ${format} not recognized`)
            }
        }

        /**
         * Import data from the given data and format
         * @param {string} data
         * @param {Storage.format} format
         * @return {Map<string, *>}
         */
        import(data, format){
            switch (format) {
                case Storage.format.XML:
                    return XmlHelper.import(data)
                default:
                    throw new TypeError(`Import format ${format} not recognized`)
            }
        }

    }

    Storage.type = {
        ENTITY: 'entities',
        WORLD: 'world'
    }

    Storage.format = {
        XML: 'xml'
    }

    return Storage
})