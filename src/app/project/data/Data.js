/**
 * @class {Data}
 */
class Data {

    static instance
    dataId

    /**
     * Generated when serializing object
     * @param {number} id
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

}

export default Data