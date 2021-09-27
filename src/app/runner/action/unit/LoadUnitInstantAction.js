import Action from '../Action.js'
import World from '../../../world/World.js'
import DataGenerator from '../../../generator/data/DataGenerator.js'
import * as StorageConstant from '../../../constant/StorageConstant.js'
import Storage from '../../../core/Storage.js'

export default class LoadUnitInstantAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_LOAD_UNIT_INSTANT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            const type = StorageConstant.type.UNITS
            const storage = Storage.get()
            const dataImport = storage.import(type, asset.getType().getDataUrl(), StorageConstant.format.XML)
            dataImport && storage.load(type, dataImport[type], DataGenerator)
        })
        return true
    }

}