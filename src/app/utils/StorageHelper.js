import * as StorageConstant from '../constant/StorageConstant.js'
import DataGenerator from '../generator/data/DataGenerator.js'
import ClipboardManager from '../manager/ClipboardManager.js'

export default class StorageHelper {

    /**
     * @param {Asset} asset
     * @param {Storage} storage
     */
    static async loadAssetUnit(asset, storage){
        const type = StorageConstant.type.UNITS
        const dataImport = storage.import(type, asset.getType().getDataUrl(), StorageConstant.format.XML)
        return dataImport && storage.load(type, dataImport[type], DataGenerator)
    }

    /**
     * @param {Storage} storage
     * @return {Promise<Unit[]>}
     */
    static async getUnitsFromClipboard(storage){
        const type = StorageConstant.type.UNITS
        const clipboard = ClipboardManager.get().getContent()
        const dataImport = storage.import(type, clipboard, StorageConstant.format.XML)
        return await storage.deserialize(type, dataImport[type])
    }

}