import Action from '../Action.js'
import World from '../../../world/World.js'

export default class CompileAssetFlowAction extends Action {

    static STATE = 'ACTION_COMPILE_ASSET_FLOW'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            const flow = World.get().getFlowManager().findByName(asset.getName())
            if(flow){
                flow.compile()
            }
        })
        return true
    }

}