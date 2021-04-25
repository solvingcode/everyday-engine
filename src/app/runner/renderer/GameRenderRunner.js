import Runner from '../Runner.js'
import World from '../../world/World.js'
import MeshRenderer from '../../renderer/MeshRenderer.js'

export class GameRenderRunner extends Runner {

    /**
     * @type {GameRenderRunner}
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
        World.get().draw(MeshRenderer.get())
    }

}