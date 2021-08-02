import Action from '../Action.js'
import World from '../../../world/World.js'

export default class StopAssetAudioAction extends Action {

    static STATE = 'ACTION_STOP_ASSET_AUDIO'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        selectedAsset.getType().stop()
        return true
    }

}