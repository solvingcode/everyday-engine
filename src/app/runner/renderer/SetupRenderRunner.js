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
    execute(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        if (!script) {
            world.draw(MeshRenderer.get())
        }else{
            world.getGraphManager().draw(script, MeshRenderer.get())
        }
    }

}