import Action from '../Action.js'
import World from '../../../world/World.js'

export default class PlayAssetAudioAction extends Action {

    static STATE = 'ACTION_PLAY_ASSET_AUDIO'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        selectedAsset.getType().play()
        return true
    }

}