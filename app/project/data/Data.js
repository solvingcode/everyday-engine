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

}

export default Data