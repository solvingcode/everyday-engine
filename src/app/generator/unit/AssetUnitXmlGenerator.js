import Storage from '../../core/Storage.js'
import * as StorageConstant from '../../constant/StorageConstant.js'

export default class AssetUnitXmlGenerator {

    /**
     * @param {Unit} unit
     * @return {Promise<string>}
     */
    static async generate(unit) {
        return Storage.get().serialize(StorageConstant.type.UNITS, [unit], StorageConstant.format.XML)
    }

}