import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetScript from '../../../asset/types/script/AssetScript.js'
import ClientError from '../../../exception/type/ClientError.js'

export default class CompileAssetScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            if (asset.getType() instanceof AssetScript) {
                const script = World.get().getScriptManager().findByName(asset.getName())
                if (script) {
                    script.compile()
                } else {
                    throw new ClientError(`Compile script asset: Asset "${asset.getName()}" is not parsed`)
                }
            }
        })
        return true
    }

}