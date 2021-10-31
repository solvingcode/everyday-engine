import Action from '../Action.js'
import World from '../../../world/World.js'
import SystemError from '../../../exception/type/SystemError.js'

export default class CompileScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const asset = world.getAssetsManager().findAssetByScript(script)
        if(asset){
            world.getAssetsManager().compileScriptAssets([asset], world)
        }else{
            throw new SystemError(`No asset attached to script "${script.getName()}"`)
        }
        return true
    }

}