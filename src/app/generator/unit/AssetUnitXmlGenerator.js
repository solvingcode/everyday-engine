import Storage from '../../core/Storage.js'
import * as StorageConstant from '../../constant/StorageConstant.js'

export default class AssetUnitXmlGenerator {

    /**
     * @param {Unit[]} units
     * @return {Promise<string>}
     */
    static async generate(units) {
        return Storage.get().serialize(StorageConstant.type.UNITS, units, StorageConstant.format.XML)
    }

}