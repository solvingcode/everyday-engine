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
    serialize(data) {
        if (_.isArray(data)) {
            throw new TypeError('Data to export must be an Object')
        }
        const schema = Schema.getMeta()
        const result = this.exportData('world', data, schema)
        return result.concat('var EngineWorldData = {world}').join('')
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
     * @param {Object} schema
     * @param {string} varname
     * @param {string} schemaPrefix
     *
     * @returns {string[]}
     */
    exportData(key, data, schema, varname = '', schemaPrefix = '') {
        let instr = []
        const schemaMeta = `${schemaPrefix}${key}`
        varname = varname ? varname : key
        if (_.isObject(data) || _.isArray(data)) {
            instr.push(`var ${varname} = new ${!_.isArray(data) ? 'EngineData.' : ''}${data.constructor.name}();`)
            for (const iData in data) {
                if (data.hasOwnProperty(iData)) {
                    const pKey = `${varname}${iData}`
                    const pSchemaKey = _.isArray(data) ? 'element' : iData
                    let pValue
                    const subInstr = this.exportData(pSchemaKey, data[iData], schema, pKey, `${schemaMeta}.`)
                    if (subInstr.length) {
                        instr = instr.concat(subInstr)
                        pValue = pKey
                    } else {
                        pValue = data[iData]
                        const schemaMetaData = schema[`${schemaMeta}.${pSchemaKey}`]
                        if (schemaMetaData) {
                            pValue = schemaMetaData.prototype === 'string' ? `"${pValue}"` : pValue
                        } else {
                            throw new TypeError(`${schemaMeta}.${pSchemaKey} not found in the Schema!`)
                        }
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