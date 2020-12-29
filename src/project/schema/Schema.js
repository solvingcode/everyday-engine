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
            let meta = {}
            for (let eMetaData in rootMeta) {
                if (rootMeta.hasOwnProperty(eMetaData)) {
                    const metaData = rootMeta[eMetaData]
                    const metaPrefix = `${prefix}${eMetaData}`
                    meta[metaPrefix] = metaData.type
                    const subMeta = metaData.meta
                    if (subMeta) {
                        meta = Object.assign(meta, this.getMeta(`${metaPrefix}.`, subMeta))
                    }
                }
            }
            return meta
        }

        /**
         * Get the actual value from the schema using the given schema meta field and value.
         * Used to help validate the value and correct it according to the format/type
         * @param {String} schemaMeta
         * @param {number|string|boolean|null|undefined} value
         */
        static getValue(schemaMeta, value) {
            const schema = this.getMeta()
            const type = schema[schemaMeta]
            let newValue
            switch (type) {
                case 'number':
                    newValue = _.isNumber(value) ? value : 0
                    break
                case 'string':
                    newValue = _.isString(value) ? value : ''
                    break
                case 'boolean':
                    newValue = !!value
                    break
                default:
                    newValue = ''
            }
            return newValue
        }
    }

    return Schema
})