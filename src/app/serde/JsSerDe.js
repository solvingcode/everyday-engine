import Schema from '../schema/Schema.js'
import SerDe from './SerDe.js'

/**
 * @class {JsSerDe}
 * @extends {SerDe}
 */
class JsSerDe extends SerDe {

    /**
     * @override
     */
    serialize(data, key) {
        if (_.isArray(data)) {
            throw new TypeError('Data to export must be an Object')
        }
        const schema = Schema.getMeta()
        const result = this.exportData(key, data, schema)
        return result.concat(`var EngineWorldData = {${key}}`).join('')
    }

    /**
     * @override
     */
    deserialize(data, key) {
        return null
    }

    /**
     * @param {string} key
     * @param {Object|Array} data
     * @param {Object} schema
     * @param {string} varname
     *
     * @returns {string[]}
     */
    exportData(key, data, schema, varname = '') {
        let instr = []
        varname = varname ? varname : key
        if (_.isObject(data) || _.isArray(data)) {
            instr.push(`var ${varname} = new ${!_.isArray(data) ? 'EngineData.' : ''}${data.constructor.name}();`)
            for (const iData in data) {
                if (data.hasOwnProperty(iData)) {
                    const pKey = `${varname}${iData}`
                    const pSchemaKey = _.isArray(data) ? 'element' : iData
                    let pValue
                    const subInstr = this.exportData(pSchemaKey, data[iData], schema, pKey)
                    if (subInstr.length) {
                        instr = instr.concat(subInstr)
                        pValue = pKey
                    } else {
                        pValue = data[iData]
                        pValue = _.isString(pValue) ? `"${pValue.replaceAll("\"", "\\\"")}"` : pValue
                    }
                    if (data.constructor === Array) {
                        instr.push(`${varname}[${iData}] = ${pValue};`)
                    } else {
                        instr.push(`${varname}.${iData} = ${pValue};`)
                    }
                }
            }
        }
        return instr
    }

}

export default JsSerDe