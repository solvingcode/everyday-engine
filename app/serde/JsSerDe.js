define(function (require) {

    const Schema = require('../schema/Schema.js')
    const SerDe = require('./Serde.js')

    /**
     * @class {JsSerDe}
     * @extends {SerDe}
     */
    class JsSerDe extends SerDe{

        /**
         * @override
         */
        serialize(data) {
            if (_.isArray(data)) {
                throw new TypeError('Data to export must be an Object')
            }
            const result = this.exportData('world', data)
            return result.join('\n')
        }

        /**
         * @override
         */
        deserialize(data) {
            return null
        }

        /**
         * @param {string} key
         * @param {Object|Array} data
         * @param {string} varname
         * @param {string} schemaPrefix
         *
         * @returns {string[]}
         */
        exportData(key, data, varname = '', schemaPrefix = '') {
            let instr = []
            const schema = Schema.getMeta()
            const schemaMeta = `${schemaPrefix}${key}`
            varname = varname ? varname : key
            if(_.isObject(data) || _.isArray(data)) {
                instr.push(`const ${varname} = new ${data.constructor.name}()`)
                for (const iData in data) {
                    if (data.hasOwnProperty(iData)) {
                        const pKey = `${varname}${iData}`
                        let pValue
                        const subInstr = this.exportData(_.isArray(data) ? 'element' : iData, data[iData], pKey, `${schemaMeta}.`)
                        if (subInstr.length) {
                            instr = instr.concat(subInstr)
                            pValue = pKey
                        }else{
                            pValue = data[iData]
                            pValue = schema[`${schemaMeta}.${iData}`].prototype === 'string' ? `"${pValue}"` : pValue
                        }
                        if(data.constructor === Array){
                            instr.push(`${varname}[${iData}] = ${pValue}`)
                        }else{
                            instr.push(`${varname}.${iData} = ${pValue}`)
                        }
                    }
                }
            }
            return instr
        }

    }

    return JsSerDe

})