import Action from '../Action.js'
import World from '../../../world/World.js'

export default class CompileScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const asset = world.getAssetsManager().findAssetByScript(script)
        world.getAssetsManager().compileScriptAssets([asset], world)
        return true
    }

}