import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import ClientError from '../../../exception/type/ClientError.js'
import AssetImage from '../../../asset/types/image/AssetImage.js'
import Asset from '../../../asset/Asset.js'
import AssetUnitInstant from '../../../unit/instant/type/internal/asset/AssetUnitInstant.js'
import Window from '../../../core/Window.js'
import AssetUnit from '../../../asset/types/unit/AssetUnit.js'
import StorageHelper from '../../../utils/StorageHelper.js'
import Storage from '../../../core/Storage.js'

export default class AttachEditorAction extends Action {

    static STATE = 'ACTION_ATTACH_EDITOR'

    /**
     * @override
     */
    static run() {
        const {start: startData} = StateManager.get().getNextProgressData(this.STATE)
        if (!(startData instanceof Asset)) {
            throw new ClientError(`Source must be an Asset`)
        }
        const world = World.get()
        const {mouse} = Window.get()
        if (startData.getType() instanceof AssetImage) {
            world.createUnitInstant(AssetUnitInstant, world.getWorldScalePosition(mouse.currentScenePosition), startData)
        } else if (startData.getType() instanceof AssetUnit) {
            StorageHelper.loadAssetUnit(startData, Storage.get())
        }
        return true
    }

}