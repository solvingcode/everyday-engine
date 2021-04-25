import Runner from '../Runner.js'
import World from '../../world/World.js'
import MeshRenderer from '../../renderer/MeshRenderer.js'
import ScriptGraph from '../../flow/graph/ScriptGraph.js'

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
        const script = World.get().getScriptManager().getSelected()
        if (!script) {
            World.get().draw(MeshRenderer.get())
        }else{
            ScriptGraph.get().draw(script, MeshRenderer.get())
        }
    }

}