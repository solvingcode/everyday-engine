import Runner from '../Runner.js'
import World from '../../world/World.js'

export class SetupRenderRunner extends Runner {

    /**
     * @type {SetupRenderRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const tabManager = world.getTabManager()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const animation = world.getAnimationManager().getSelected(tabManager)
        if (script) {
            world.getGraphManager().draw(script, world.getMeshRenderer())
        } else if (!animation) {
            world.draw(world.getMeshRenderer())
        }
    }

}