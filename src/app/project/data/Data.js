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
    isExportable() {
        return true
    }

    /**
     * @param {Object[]} target
     * @param {Object[]} source
     * @param {Function} criteria
     * @param {Function} exclude
     */
    concat(target, source, criteria, exclude) {
        if (target && source) {
            source.forEach((sItem) => {
                const existIndex = target.findIndex(tItem => criteria(tItem, sItem))
                if (existIndex >= 0) {
                    if (exclude) {
                        const currentTarget = target[existIndex]
                        for (const attribute in currentTarget) {
                            if (!exclude(attribute)) {
                                currentTarget[attribute] = _.cloneDeep(sItem[attribute])
                            }
                        }
                    } else {
                        target[existIndex] = _.cloneDeep(sItem)
                    }
                } else {
                    target.push(_.cloneDeep(sItem))
                }
            })
        }
    }

}

export default Data