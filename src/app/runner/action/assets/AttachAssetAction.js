import Action from '../Action.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import StateManager from '../../../state/StateManager.js'
import ClientError from '../../../exception/type/ClientError.js'
import Asset from '../../../asset/Asset.js'
import Unit from '../../../unit/Unit.js'
import AssetScript from '../../../asset/types/script/AssetScript.js'
import World from '../../../world/World.js'

export default class AttachAssetAction extends Action {

    static STATE = 'ACTION_ATTACH_ASSET'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        if (!(startData instanceof Asset)) {
            throw new ClientError(`Source must be an Asset`)
        }
        if(endData instanceof Unit && startData.getType() instanceof AssetScript){
            AssetHelper.attachAssetScriptToUnit(endData, startData, World.get())
        }
        return true
    }

}