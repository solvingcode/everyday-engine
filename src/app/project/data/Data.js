/**
 * @class {Data}
 */
class Data {

    static instance
    dataId

    /**
     * Generated when serializing object
     * @param {number|null} id
     */
    setDataId(id) {
        this.dataId = id
    }

    /**
     * @return {number}
     */
    getDataId() {
        return this.dataId
    }

    /**
     * Exportable data will be added to the exported object (ex: world)
     * @return {boolean}
     */
    isExportable(){
        return true
    }

    /**
     * @param {Object[]} target
     * @param {Object[]} source
     * @param {Function} criteria
     */
    concat(target, source, criteria){
        if(target && source){
            source.forEach((sItem) => {
                const existIndex = target.findIndex(tItem => criteria(tItem, sItem))
                if(existIndex >= 0){
                    target[existIndex] = _.cloneDeep(sItem)
                }else{
                    target.push(_.cloneDeep(sItem))
                }
            })
        }
    }

}

export default Data