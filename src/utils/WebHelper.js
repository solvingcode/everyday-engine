define(function () {

    /**
     * @class {WebHelper}
     */
    class WebHelper {

        /**
         * @param {string[]} data
         * @returns {string}
         */
        static export(data) {
            if (_.isArray(data)) {
                throw new TypeError('Data to export as WEB must be an Object')
            }
            const result = this.exportData('project', data)
            return result.join('\n')
        }

        /**
         * @param {string} key
         * @param {Object|Array} data
         *
         * @returns {string[]}
         */
        static exportData(key, data) {
            let instr = []
            if(_.isObject(data) || _.isArray(data)) {
                instr.push(`const ${key} = new ${data.constructor.name}()`)
                for (const iData in data) {
                    if (data.hasOwnProperty(iData)) {
                        const pKey = `${key}${iData}`
                        let pValue = data[iData]
                        const subInstr = this.exportData(pKey, pValue)
                        if (subInstr.length) {
                            instr = instr.concat(subInstr)
                            pValue = pKey
                        }
                        if(data.constructor === Array){
                            instr.push(`${key}[${iData}] = ${pValue}`)
                        }else{
                            instr.push(`${key}.${iData} = ${pValue}`)
                        }
                    }
                }
            }
            return instr
        }

    }

    return WebHelper

})