import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import Window from '../../core/Window.js'
import FunctionScript from '../../flow/FunctionScript.js'
import {MAIN_FUNCTION} from '../../flow/AScriptFunction.js'
import LayoutHelper from '../../utils/LayoutHelper.js'
import AssetHelper from '../../utils/AssetHelper.js'
import Storage from '../../core/Storage.js'
import {KeyCode} from '../../core/Keyboard.js'

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
        const {mouse, keyboard} = Window.get()
        const stateManager = StateManager.get()
        if (!stateManager.isRunning() && !stateManager.isFormUpdating()) {
            const scriptClass = World.get().getScriptManager().getSelected(World.get().getTabManager())
            const scriptFunction = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
            if (scriptClass && !scriptFunction) {
                const exitMainFunction = scriptClass.getFunctions().find(func => func.isMain())
                if (!exitMainFunction) {
                    const mainFunction = new FunctionScript(MAIN_FUNCTION)
                    scriptClass.addFunction(mainFunction)
                } else if (!exitMainFunction.isSelected()) {
                    exitMainFunction.setSelected(true)
                }
            }
            if (scriptFunction) {
                this.selectUnits(scriptFunction, mouse, keyboard)
                this.focusUnits(scriptFunction, mouse)
                this.handleUnitEvent(scriptFunction, mouse)
                this.updateScript(scriptClass)
            }
        }
    }

    /**
     * @return {boolean}
     */
    isEditing() {
        const mouse = Window.get().mouse
        return mouse.isButtonPressed(MouseButton.LEFT)
    }

    /**
     * @param {AScript} script
     */
    updateScript(script) {
        const shouldUpdate = script.getFunctions().some(func => func.isUpdated())
        if (shouldUpdate && !this.isEditing()) {
            script.reset()
            const asset = World.get().getTabManager().getSelectedContentData()
            script.getFunctions().forEach(func => func.setUpdated(false))
            AssetHelper.regenerate(asset, script, Storage.get())
        }
    }

    /**
     * @param {AScriptFunction} script
     * @param {Mouse} mouse
     * @param {Keyboard} keyboard
     */
    selectUnits(script, mouse, keyboard) {
        const stateManager = StateManager.get()
        const world = World.get()
        const camera = script.getCamera()
        const graphManager = world.getGraphManager()
        const currentScenePosition = camera.fromCameraScale(mouse.currentScenePosition)
        const nodeUnit = graphManager.findFirstNodeUnitByPosition(camera.fromCanvasCoord(currentScenePosition))
        if (keyboard.isKeyPressed(KeyCode.CTRL) &&
            mouse.isButtonPressed(MouseButton.LEFT) &&
            LayoutHelper.isPositionValid(mouse) && !this.unitMoving) {
            const dragArea = mouse.getDragArea(script.getCamera())
            world.getGraphManager().selectUnits(script, dragArea, true)
        } else if (mouse.isButtonPressed(MouseButton.LEFT) &&
            !stateManager.hasAnyState('DRAW_NODE_EDGE') &&
            LayoutHelper.isPositionValid(mouse) && !this.unitMoving && (!nodeUnit || !nodeUnit.isSelected())) {
            const dragArea = mouse.getDragArea(script.getCamera())
            world.getGraphManager().selectUnits(script, dragArea, false)
        }
    }

    /**
     * @param {AScriptFunction} script
     * @param {Mouse} mouse
     */
    focusUnits(script, mouse) {
        const world = World.get()
        world.getGraphManager().focusUnits(script, mouse)
    }

    /**
     * @param {AScriptFunction} script
     * @param {Mouse} mouse
     */
    handleUnitEvent(script, mouse) {
        const stateManager = StateManager.get()
        const world = World.get()
        const graphManager = world.getGraphManager()
        const camera = script.getCamera()
        const currentScenePosition = camera.fromCanvasCoord(camera.fromCameraScale(mouse.currentScenePosition))
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const unit = graphManager.findFirstNodeUnitByPosition(currentScenePosition)
            //if a unit is already moving
            if (this.unitMoving) {
                const selectedUnits = graphManager.getSelected()
                const dragArea = mouse.dragAndDrop(camera)
                selectedUnits.forEach(selectedUnit => {
                    const transformComponent = selectedUnit.getComponent(TransformComponent)
                    const position = transformComponent.getPosition()
                    transformComponent.setLocalPosition(Vector.add(position, dragArea))
                })
            }
            //otherwise start moving the selected units
            else if (unit && !this.isMoving && this.isValidPositionForMoving(script, unit, currentScenePosition)) {
                this.unitMoving = unit
            }
            //if the actual position is valid (not outside area of selection)
            else if (LayoutHelper.isPositionValid(mouse)) {
                //search if a node input/output is clicked to start drawing edges, else start drawing selection box
                if (!stateManager.hasAnyState('DRAW_SELECT_GRAPH') &&
                    !stateManager.hasAnyState('DRAW_NODE_EDGE')) {
                    this.startNodeInput = ScriptHelper.findNodeInputByPosition(script, unit, currentScenePosition, world)
                    this.startNodeOutput = ScriptHelper.findNodeOutputByPosition(script, unit, currentScenePosition, world)
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
                const endUnit = graphManager.findFirstNodeUnitByPosition(currentScenePosition)
                const endNodeInput = ScriptHelper.findNodeInputByPosition(script, endUnit, currentScenePosition, world)
                const endNodeOutput = ScriptHelper.findNodeOutputByPosition(script, endUnit, currentScenePosition, world)
                const nodeTargetInput = this.startNodeInput || endNodeInput
                const nodeSourceInput = this.startNodeOutput || endNodeOutput
                if (nodeTargetInput && nodeSourceInput) {
                    const targetName = nodeTargetInput.input ? nodeTargetInput.input.getAttrName() : null
                    const nodeInput = nodeTargetInput.node.getInputNodeAttached(targetName)
                    if (nodeInput) {
                        script.removeInput(nodeInput)
                    }
                    if (nodeTargetInput.input && nodeSourceInput.output) {
                        nodeTargetInput.node.attachResultOutput(nodeSourceInput.node, nodeTargetInput.input.getAttrName())
                    } else if (!nodeTargetInput.input && !nodeSourceInput.output) {
                        nodeTargetInput.node.attachPrevNode(nodeSourceInput.node)
                    } else if (!nodeTargetInput.input && nodeSourceInput.output) {
                        nodeTargetInput.node.attachManagedOutput(nodeSourceInput.node)
                    }
                }
            }
        } else {
            this.isMoving = false
            this.unitMoving = null
        }
    }

    /**
     * @param {AScriptFunction} script
     * @param {Unit} unit
     * @param {Vector} position
     * @return {boolean}
     */
    isValidPositionForMoving(script, unit, position) {
        const world = World.get()
        return ScriptHelper.findNodeInputByPosition(script, unit, position, world) === undefined &&
            ScriptHelper.findNodeOutputByPosition(script, unit, position, world) === undefined
    }
}