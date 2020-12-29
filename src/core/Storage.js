define(function (require) {

    const XmlHelper = require('../utils/XmlHelper.js')
    const Schema = require('../project/schema/Schema.js')

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
         */
        updateAndValidate(type, data){
            const validData = this.validate(type, data, Schema.getMeta())
            this.data[type] = _.cloneDeep(validData[type])
            return this
        }

        /**
         * @param {string} key
         * @param {Object|Array} data
         * @param {SchemaMeta} schema
         * @param {string} schemaPrefix
         * @return {Object|Array}
         */
        validate(key, data, schema, schemaPrefix = ''){
            const schemaMeta = `${schemaPrefix}${key}`
            const prototype = schema[schemaMeta]
            if (prototype) {
                if(!_.isString(prototype)){
                    const isArray = prototype === Array
                    let result = isArray ? [] : {}
                    this.getProperties(data, prototype)
                        .forEach(prop => {
                            const subResult = this.validate(prop.key, prop.value, schema,`${schemaMeta}.`)
                            if (subResult) {
                                if(isArray){
                                    result.push(subResult)
                                }else{
                                    result = Object.assign(result, subResult)
                                }
                            } else {
                                result[prop.key] =  Schema.getValue(`${schemaMeta}.${prop.key}`, prop.value)
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
                return (object || []).map(value => ({key: 'element', value}))
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