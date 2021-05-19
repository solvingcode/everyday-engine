import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import Menu from '../../layout/Menu.js'

export default class ScriptEditorRunner extends Runner {

    /**
     * @type {ScriptEditorRunner}
     */
    static instance = null

    /**
     * @type {Unit}
     */
    unitMoving = null

    /**
     * @type {boolean}
     */
    isMoving = false

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * Execute all world actions (move camera, ...)
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const stateManager = StateManager.get()
        if (!stateManager.isRunning() && !stateManager.isFormUpdating()) {
            const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
            if (script) {
                this.handleUnitEvent(script, mouse)
                this.selectUnits(script, mouse)
                this.focusUnits(script, mouse)
            }
        }
    }

    /**
     * @param {AScript} script
     * @param {Mouse} mouse
     */
    selectUnits(script, mouse) {
        const menu = Menu.get()
        const world = World.get()
        if (mouse.isButtonPressed(MouseButton.LEFT) && !menu.getUIRenderer().getItemAt(mouse)) {
            world.getGraphManager().selectUnits(script, mouse)
        }
    }

    /**
     * @param {AScript} script
     * @param {Mouse} mouse
     */
    focusUnits(script, mouse) {
        const world = World.get()
        world.getGraphManager().focusUnits(script, mouse)
    }

    /**
     * @param {AScript} script
     * @param {Mouse} mouse
     */
    handleUnitEvent(script, mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const world = World.get()
            const camera = script.getCamera()
            const currentScenePosition = camera.fromCameraScale(mouse.currentScenePosition)
            const unit = world.getGraphManager().findFirstUnitByPosition(camera.fromCanvasCoord(currentScenePosition))
            const dragArea = mouse.dragAndDrop(camera)
            if (unit && !this.isMoving) {
                this.unitMoving = unit
            }
            if (this.unitMoving) {
                const transformComponent = this.unitMoving.getComponent(TransformComponent)
                const position = transformComponent.getPosition()
                transformComponent.setPosition(Vector.add(position, dragArea))
            }
            this.isMoving = true
        } else {
            this.isMoving = false
            this.unitMoving = null
        }
    }
}