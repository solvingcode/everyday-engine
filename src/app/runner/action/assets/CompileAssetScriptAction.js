import Action from '../Action.js'
import World from '../../../world/World.js'

export default class CompileAssetScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        world.getAssetsManager().compileScriptAssets(selectedAssets, world)
        return true
    }

}