import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class DeleteFunctionAction extends Action {

    static STATE = 'ACTION_DELETE_SCRIPT_FUNCTION'

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const {func} = StateManager.get().getNextProgressData(this.STATE)
        if (script && func) {
            script.deleteFunction(world.getFunctionRegistry(), func)
            const mainFunction = script.getMainFunction()
            mainFunction.select()
            mainFunction.setUpdated(true)
        }
        return true
    }

}