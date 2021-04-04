import DataSchema from '../project/data/DataSchema.js'

export default class DataHelper {

    /**
     * @param {Object|Array|Data} value
     * @param {Data|Function} type
     * @return {Object|Array}
     */
    static validate(value, type) {
        let dataValidated
        if (value) {
            if (value.dataId) { // If dataId is present, validate data for deserialization
                dataValidated = DataSchema.newInstance(value.dataId, type)
            } else if (!DataSchema.isExcluded(value.constructor)) { // else for serialization
                if(value instanceof type){
                    dataValidated = new type()
                    dataValidated.setDataId(DataSchema.getId(value.constructor))
                }
            }
        }
        return dataValidated
    }

}