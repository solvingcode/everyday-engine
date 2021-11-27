import Action from '../Action.js'
import World from '../../../world/World.js'

export default class CompileAllScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_ALL_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.getAssetsManager().getScriptAssets().forEach(asset =>
            world.getAssetsManager().compileScriptAssets([asset], world))
        return true
    }

}