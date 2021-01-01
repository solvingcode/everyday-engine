define(function (require) {

    const SchemaMeta = require('./SchemaMeta.js')

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
                    newValue = parseFloat(value) || 0
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

    return Schema
})