import * as StorageConstant from '../constant/StorageConstant.js'
import Storage from '../core/Storage.js'
import DataGenerator from '../generator/data/DataGenerator.js'
import ClipboardManager from '../manager/ClipboardManager.js'

export default class StorageHelper {

    /**
     * @param {Asset} asset
     */
    static loadAssetUnit(asset){
        const type = StorageConstant.type.UNITS
        const storage = Storage.get()
        const dataImport = storage.import(type, asset.getType().getDataUrl(), StorageConstant.format.XML)
        dataImport && storage.load(type, dataImport[type], DataGenerator)
    }

    /**
     * @return {Promise<Unit[]>}
     */
    static async getUnitsFromClipboard(){
        const type = StorageConstant.type.UNITS
        const storage = Storage.get()
        const clipboard = ClipboardManager.get().getContent()
        const dataImport = storage.import(type, clipboard, StorageConstant.format.XML)
        return await storage.deserialize(type, dataImport[type])
    }

}