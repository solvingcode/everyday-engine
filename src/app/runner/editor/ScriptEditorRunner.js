import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import Menu from '../../layout/Menu.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import Window from '../../core/Window.js'

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
     * @param {{node: ANode, input: DynamicAttribute|null}|undefined}
     */
    startNodeInput

    /**
     * @param {{node: ANode, output: DynamicAttribute|null}|undefined}
     */
    startNodeOutput

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * Execute all world actions (move camera, ...)
     */
    execute() {
        const mouse = Window.get().mouse
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
        const stateManager = StateManager.get()
        const world = World.get()
        const camera = script.getCamera()
        const graphManager = world.getGraphManager()
        const currentScenePosition = camera.fromCameraScale(mouse.currentScenePosition)
        const unit = graphManager.findFirstUnitByPosition(camera.fromCanvasCoord(currentScenePosition))
        if (mouse.isButtonPressed(MouseButton.LEFT) &&
            !stateManager.hasAnyState('DRAW_NODE_EDGE') &&
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
        const world = World.get()
        const graphManager = world.getGraphManager()
        const camera = script.getCamera()
        const currentScenePosition = camera.fromCanvasCoord(camera.fromCameraScale(mouse.currentScenePosition))
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const unit = graphManager.findFirstUnitByPosition(currentScenePosition)
            //if a unit is already moving
            if (this.unitMoving) {
                const selectedUnits = graphManager.getSelected()
                const dragArea = mouse.dragAndDrop(camera)
                selectedUnits.forEach(selectedUnit => {
                    const transformComponent = selectedUnit.getComponent(TransformComponent)
                    const position = transformComponent.getPosition()
                    transformComponent.setPosition(Vector.add(position, dragArea))
                })
            }
            //otherwise start moving the selected units
            else if (unit && !this.isMoving && this.isValidPositionForMoving(script, unit, currentScenePosition)) {
                this.unitMoving = unit
            }
            //if the actual position is valid (not outside area of selection)
            else if (this.isPositionValid(mouse)) {
                //search if a node input/output is clicked to start drawing edges, else start drawing selection box
                if (!stateManager.hasAnyState('DRAW_SELECT_GRAPH') &&
                    !stateManager.hasAnyState('DRAW_NODE_EDGE')) {
                    this.startNodeInput = ScriptHelper.findNodeInputByPosition(script, unit, currentScenePosition)
                    this.startNodeOutput = ScriptHelper.findNodeOutputByPosition(script, unit, currentScenePosition)
                    if (this.startNodeInput !== undefined || this.startNodeOutput !== undefined) {
                        stateManager.startState('DRAW_NODE_EDGE', 1, {unit: null})
                    } else {
                        stateManager.startState('DRAW_SELECT_GRAPH', 1, {unit: null})
                    }
                }
            }
            this.isMoving = true
        }
        //if drawing node edge is done
        else if (stateManager.isStop('DRAW_NODE_EDGE')) {
            const drawState = stateManager.getStopData('DRAW_NODE_EDGE', 1)
            const drawUnit = drawState && drawState.unit
            if (drawUnit) {
                const endUnit = graphManager.findFirstUnitByPosition(currentScenePosition)
                const endNodeInput = ScriptHelper.findNodeInputByPosition(script, endUnit, currentScenePosition)
                const endNodeOutput = ScriptHelper.findNodeInputByPosition(script, endUnit, currentScenePosition)
                const nodeTargetInput = this.startNodeInput || endNodeInput
                const nodeSourceInput = this.startNodeOutput || endNodeOutput
                if(nodeTargetInput && nodeSourceInput){
                    nodeTargetInput.node
                        .attach(nodeSourceInput.node,
                            nodeTargetInput.input ? nodeTargetInput.input.getId() : null)
                }
            }
        }
        else {
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

    /**
     * @param {AScript} script
     * @param {Unit} unit
     * @param {Vector} position
     * @return {boolean}
     */
    isValidPositionForMoving(script, unit, position) {
        return ScriptHelper.findNodeInputByPosition(script, unit, position) === undefined &&
            ScriptHelper.findNodeOutputByPosition(script, unit, position) === undefined
    }
}