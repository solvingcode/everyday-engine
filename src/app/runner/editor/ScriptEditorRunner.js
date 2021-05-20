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
                this.selectUnits(script, mouse)
                this.focusUnits(script, mouse)
                this.handleUnitEvent(script, mouse)
            }
        }
    }

    /**
     * @param {AScript} script
     * @param {Mouse} mouse
     */
    selectUnits(script, mouse) {
        const world = World.get()
        const camera = script.getCamera()
        const graphManager = world.getGraphManager()
        const currentScenePosition = camera.fromCameraScale(mouse.currentScenePosition)
        const unit = graphManager.findFirstUnitByPosition(camera.fromCanvasCoord(currentScenePosition))
        if (mouse.isButtonPressed(MouseButton.LEFT) &&
            this.isPositionValid(mouse) && !this.unitMoving && (!unit || !unit.isSelected())) {
            const dragArea = mouse.getDragArea(script.getCamera())
            world.getGraphManager().selectUnits(script, dragArea)
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
        const stateManager = StateManager.get()
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const world = World.get()
            const graphManager = world.getGraphManager()
            const camera = script.getCamera()
            const currentScenePosition = camera.fromCameraScale(mouse.currentScenePosition)
            const unit = graphManager.findFirstUnitByPosition(camera.fromCanvasCoord(currentScenePosition))
            if (unit && !this.isMoving) {
                this.unitMoving = unit
            }
            if (this.unitMoving) {
                const selectedUnits = graphManager.getSelected()
                const dragArea = mouse.dragAndDrop(camera)
                selectedUnits.forEach(selectedUnit => {
                    const transformComponent = selectedUnit.getComponent(TransformComponent)
                    const position = transformComponent.getPosition()
                    transformComponent.setPosition(Vector.add(position, dragArea))
                })
            }else if(!stateManager.hasAnyState('DRAW_SELECT_GRAPH') && this.isPositionValid(mouse)){
                stateManager.startState('DRAW_SELECT_GRAPH', 1)
            }
            this.isMoving = true
        } else {
            this.isMoving = false
            this.unitMoving = null
        }
    }

    /**
     * @param {Mouse} mouse
     * @return {boolean}
     */
    isPositionValid(mouse) {
        const menu = Menu.get()
        return !menu.getUIRenderer().getItemAt(mouse)
    }
}