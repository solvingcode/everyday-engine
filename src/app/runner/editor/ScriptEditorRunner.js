import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import ScriptGraph from '../../flow/graph/ScriptGraph.js'
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
                this.handleUnitEvent(mouse)
                this.selectUnits(mouse)
                this.focusUnits(mouse)
            }
        }
    }

    /**
     * @param {Mouse} mouse
     */
    selectUnits(mouse) {
        const menu = Menu.get()
        if (mouse.isButtonPressed(MouseButton.LEFT) && !menu.getUIRenderer().getItemAt(mouse)) {
            ScriptGraph.get().selectUnits(mouse)
        }
    }

    /**
     * @param {Mouse} mouse
     */
    focusUnits(mouse) {
        ScriptGraph.get().focusUnits(mouse)
    }

    /**
     * @param {Mouse} mouse
     */
    handleUnitEvent(mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const world = World.get()
            const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
            const unit = ScriptGraph.get().findFirstUnitByPosition(world.getWorldPosition(currentScenePosition))
            const dragArea = mouse.dragAndDrop(world.getCamera())
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