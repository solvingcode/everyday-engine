import EntitySelector from '../../world/manager/EntitySelector.js'
import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import Mouse from '../../core/Mouse.js'
import Vector from '../../utils/Vector.js'

const {CURSOR} = Mouse

class WindowRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isMouseMove()
    }

    /**
     * Execute all windows actions (move mouse, ...)
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const entitySelector = EntitySelector.get()
        const stateManager = StateManager.get()
        const world = World.get()
        if (!stateManager.isRunning()) {
            this.focus(world, entitySelector, mouse)
        }
        this.cursor(world, entitySelector, mouse)
    }

    /**
     * Focus entity over mouse
     * @param {World} world
     * @param {EntitySelector} entitySelector
     * @param {Mouse} mouse
     */
    focus(world, entitySelector, mouse) {
        entitySelector.unfocusAll(world)
        const currentScenePosition = new Vector(Object.assign(mouse.currentScenePosition,{z: 0}))
        const vector3d = world.getCamera().fromCameraScale(currentScenePosition)
        entitySelector.focus(world, world.getWorldPosition(vector3d))
    }

    /**
     * Change cursor mouse
     * @param {World} world
     * @param {EntitySelector} entitySelector
     * @param {Mouse} mouse
     */
    cursor(world, entitySelector, mouse) {
        let cursor = StateManager.get().getData('cursor')
        if (cursor === CURSOR.MOVE_ENTITY) {
            const entity = entitySelector.get(world, mouse.currentScenePosition)
            cursor = entity && entity.selected && CURSOR.MOVE
        }
        document.body.style.cursor = cursor || 'default'
    }

    static get() {
        if (!WindowRunner.instance) {
            WindowRunner.instance = new WindowRunner()
        }
        return WindowRunner.instance
    }
}

WindowRunner.instance = null

export default WindowRunner