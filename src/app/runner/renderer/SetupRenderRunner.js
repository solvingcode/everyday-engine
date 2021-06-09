import Runner from '../Runner.js'
import World from '../../world/World.js'
import MeshRenderer from '../../renderer/MeshRenderer.js'

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
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const animation = world.getAnimationManager().getSelected(tabManager)
        if (script) {
            world.getGraphManager().draw(script, MeshRenderer.get())
        } else if (!animation) {
            world.draw(MeshRenderer.get())
        }
    }

}