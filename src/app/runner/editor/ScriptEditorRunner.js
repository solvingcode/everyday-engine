import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import MoveAction from '../action/edit/MoveAction.js'
import ScaleAction from '../action/edit/ScaleAction.js'
import RotateAction from '../action/edit/RotateAction.js'
import GUIMoveComponent from '../../component/internal/gui/move/GUIMoveComponent.js'
import GUIScaleComponent from '../../component/internal/gui/scale/GUIScaleComponent.js'
import GUIRotateComponent from '../../component/internal/gui/rotate/GUIRotateComponent.js'
import ScriptGraph from '../../flow/graph/ScriptGraph.js'

export default class ScriptEditorRunner extends Runner {

    /**
     * @type {ScriptEditorRunner}
     */
    static instance = null

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
            const script = World.get().getScriptManager().getSelected()
            if(script){
                this.handleUnitEvent(stateManager, mouse)
                this.selectUnits(stateManager, mouse)
                this.focusUnits(mouse)
            }
        }
    }

    /**
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    selectUnits(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT) &&
            this.isSelectEdit(stateManager) &&
            !stateManager.hasState(MoveAction.STATE, 1) &&
            !stateManager.hasState(ScaleAction.STATE, 1) &&
            !stateManager.hasState(RotateAction.STATE, 1)) {
            const world = World.get()
            const dragArea = mouse.getDragArea(world.getCamera())
            world.selectUnits(dragArea)
        }
    }

    /**
     * @param {Mouse} mouse
     */
    focusUnits(mouse) {
        ScriptGraph.get().focusUnits(mouse)
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isSelectEdit(stateManager) {
        return stateManager.isProgress('DRAW_SELECT') ||
            stateManager.isProgress('DRAW_MOVE') ||
            stateManager.isProgress('DRAW_SCALE') ||
            stateManager.isProgress('DRAW_ROTATE')
    }

    /**
     * Handle action when entity's event is triggered (like click, drag, ...)
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    handleUnitEvent(stateManager, mouse) {
        if (this.isSelectEdit(stateManager)) {
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const world = World.get()
                const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
                const unit = world.findFirstUnitByPosition(world.getWorldPosition(currentScenePosition))
                const dragArea = mouse.getDragArea(world.getCamera())
                if (unit && dragArea) {
                    if (unit.getComponent(GUIMoveComponent)) {
                        !stateManager.isProgress(MoveAction.STATE) &&
                        stateManager.startState(MoveAction.STATE, 1, {unit})
                    }
                    if (unit.getComponent(GUIScaleComponent)) {
                        !stateManager.isProgress(ScaleAction.STATE) &&
                        stateManager.startState(ScaleAction.STATE, 1, {unit})
                    } else if (unit.getComponent(GUIRotateComponent)) {
                        !stateManager.isProgress(RotateAction.STATE) &&
                        stateManager.startState(RotateAction.STATE, 1, {unit})
                    }
                }
            } else {
                stateManager.isProgress(MoveAction.STATE)
                && stateManager.stopState(MoveAction.STATE, 1)
                stateManager.isProgress(ScaleAction.STATE)
                && stateManager.stopState(ScaleAction.STATE, 1)
                stateManager.isProgress(RotateAction.STATE)
                && stateManager.stopState(RotateAction.STATE, 1)
            }
        }
    }
}