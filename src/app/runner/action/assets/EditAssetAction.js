import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Asset from '../../../asset/Asset.js'
import ClientError from '../../../exception/type/ClientError.js'

export default class EditAssetAction extends Action {

    static STATE = 'ACTION_EDIT_ASSET'

    /**
     * @override
     */
    static run() {
        const {bind: asset} = StateManager.get().getNextProgressData(this.STATE)
        if (!(asset instanceof Asset)) {
            throw new ClientError(`Source must be an Asset`)
        }
        asset.open()
        return true
    }

}