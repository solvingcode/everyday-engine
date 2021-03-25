import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import MoveCameraAction from '../action/camera/MoveCameraAction.js'
import ZoomInOutCameraAction from '../action/camera/ZoomInOutCameraAction.js'
import World from '../../world/World.js'
import Mouse from '../../core/Mouse.js'
import MoveAction from '../action/edit/MoveAction.js'
import ScaleAction from '../action/edit/ScaleAction.js'
import RotateAction from '../action/edit/RotateAction.js'
import {objectCanvas} from '../../core/Context.js'
import Vector from '../../utils/Vector.js'
import UnitSelector from '../../manager/UnitSelector.js'
import UnitHelper from '../../unit/UnitHelper.js'
import GUIMoveXComponent from '../../component/gui/move/GUIMoveXComponent.js'
import Size from '../../pobject/Size.js'
import GUIMoveYComponent from '../../component/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../component/gui/move/GUIMoveFreeComponent.js'
import GUIMoveComponent from '../../component/gui/move/GUIMoveComponent.js'
import GUIScaleXComponent from '../../component/gui/scale/GUIScaleXComponent.js'
import GUIScaleYComponent from '../../component/gui/scale/GUIScaleYComponent.js'
import GUIScaleFreeComponent from '../../component/gui/scale/GUIScaleFreeComponent.js'
import GUIScaleComponent from '../../component/gui/scale/GUIScaleComponent.js'
import GUIRotateComponent from '../../component/gui/rotate/GUIRotateComponent.js'
import MoveXUnitInstant from '../../unit/instant/type/internal/move/MoveXUnitInstant.js'
import MoveYUnitInstant from '../../unit/instant/type/internal/move/MoveYUnitInstant.js'
import MoveFreeUnitInstant from '../../unit/instant/type/internal/move/MoveFreeUnitInstant.js'
import ScaleXUnitInstant from '../../unit/instant/type/internal/scale/ScaleXUnitInstant.js'
import ScaleYUnitInstant from '../../unit/instant/type/internal/scale/ScaleYUnitInstant.js'
import ScaleFreeUnitInstant from '../../unit/instant/type/internal/scale/ScaleFreeUnitInstant.js'
import RotateZUnitInstant from '../../unit/instant/type/internal/rotate/RotateZUnitInstant.js'
import GUIGridComponent from '../../component/gui/grid/GUIGridComponent.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import Window from '../../core/Window.js'

const {MouseButton} = Mouse

/**
 * @todo: need to be revisited
 */
class WorldRunner extends Runner {

    /**
     * @type {WorldRunner}
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
            this.updateMouseWheel(stateManager, mouse)
            this.handleUnitEvent(stateManager, mouse)
            this.selectUnits(stateManager, mouse)
            this.focusUnits(mouse)
            this.setupEditor(stateManager)
            this.createGridEntity()
        }
    }

    createGridEntity() {
        const world = World.get()
        const camera = world.getCamera()
        const windowSize = Window.get().size
        const unitManager = world.getUnitManager()
        const gridComponentClass = GUIGridComponent
        const position = new Vector()
        unitManager.getUnitsHasComponents([gridComponentClass])
            .forEach(unit => unitManager.deleteUnit(unit))
        if(world.isShowGrid()){
            const sizeChunk = new Size({width: 600, height: 600})
            const maxChunkNbr = 14 * 8
            const chunkSizeNbrX = Math.ceil(camera.fromScaleNumber(windowSize.width / sizeChunk.width, position)) + 1
            const chunkSizeNbrY = Math.ceil(camera.fromScaleNumber(windowSize.height / sizeChunk.height, position)) + 1
            if (maxChunkNbr >= chunkSizeNbrX * chunkSizeNbrY) {
                const chunkVectors = Array.from(Array(chunkSizeNbrX * chunkSizeNbrY).keys())
                    .map(iChunk => {
                        const {width, height} = sizeChunk
                        const x = Math.floor(camera.position.x / width) * width + width * (iChunk % chunkSizeNbrX)
                        const y = Math.floor(camera.position.y / height) * height + height * Math.floor(iChunk / chunkSizeNbrX)
                        return new Vector({x, y})
                    })
                chunkVectors.forEach(({x, y}) => {
                    unitManager.createUnitInstant(GridUnitInstant,
                        new Vector({x, y}),
                        sizeChunk
                    )
                })
            }
        }
    }

    /**
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    updateMouseWheel(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
            stateManager.startState(MoveCameraAction.STATE, 1)
        }
        if (mouse.getMouseWheel().y && mouse.target === objectCanvas) {
            stateManager.startState(ZoomInOutCameraAction.STATE, 1,
                {deltaY: mouse.getMouseWheel().y})
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
        World.get().focusUnits(mouse)
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isSelectEdit(stateManager){
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
    handleUnitEvent(stateManager, mouse){
        if(this.isSelectEdit(stateManager)){
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const world = World.get()
                const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
                const unit = world.findFirstUnitByPosition(world.getWorldPosition(currentScenePosition))
                const dragArea = mouse.getDragArea(world.getCamera())
                if(unit && dragArea){
                    if(unit.getComponent(GUIMoveComponent)){
                        !stateManager.isProgress(MoveAction.STATE) &&
                        stateManager.startState(MoveAction.STATE, 1, {unit})
                    }
                    if(unit.getComponent(GUIScaleComponent)){
                        !stateManager.isProgress(ScaleAction.STATE) &&
                        stateManager.startState(ScaleAction.STATE, 1, {unit})
                    }
                    else if(unit.getComponent(GUIRotateComponent)){
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

    /**
     * @param {StateManager} stateManager
     */
    setupEditor(stateManager){
        const world = World.get()
        const unitManager = world.getUnitManager()
        const moveComponentClasses = [GUIMoveXComponent, GUIMoveYComponent, GUIMoveFreeComponent]
        const scaleComponentClasses = [GUIScaleXComponent, GUIScaleYComponent, GUIScaleFreeComponent]
        const rotateComponentClasses = [GUIRotateComponent]
        unitManager.getUnitsHasAnyComponents([].concat(moveComponentClasses, scaleComponentClasses, rotateComponentClasses))
            .forEach(unit => unitManager.deleteUnit(unit))
        const selectedUnits = UnitSelector.get().getSelected(world)
        let editorPosition = selectedUnits
            .reduce((position, unit) => UnitHelper.toLargeCenterPosition(unit), null)
        if(editorPosition) {
            if(stateManager.hasAnyState('DRAW_MOVE')){
                moveComponentClasses.forEach(componentClass => {
                    if(componentClass === GUIMoveXComponent){
                        unitManager.createUnitInstant(MoveXUnitInstant, componentClass, editorPosition)
                    }else if(componentClass === GUIMoveYComponent){
                        unitManager.createUnitInstant(MoveYUnitInstant, componentClass, editorPosition)
                    }else if(componentClass === GUIMoveFreeComponent){
                        unitManager.createUnitInstant(MoveFreeUnitInstant, componentClass, editorPosition)
                    }
                })
            }
            else if(stateManager.hasAnyState('DRAW_SCALE')){
                scaleComponentClasses.forEach(componentClass => {
                    if(componentClass === GUIScaleXComponent){
                        unitManager.createUnitInstant(ScaleXUnitInstant, componentClass, editorPosition)
                    }else if(componentClass === GUIScaleYComponent){
                        unitManager.createUnitInstant(ScaleYUnitInstant, componentClass, editorPosition)
                    }else if(componentClass === GUIScaleFreeComponent){
                        unitManager.createUnitInstant(ScaleFreeUnitInstant, componentClass, editorPosition)
                    }
                })
            }else if(stateManager.hasAnyState('DRAW_ROTATE')){
                rotateComponentClasses.forEach(componentClass => {
                    unitManager.createUnitInstant(RotateZUnitInstant, componentClass, editorPosition)
                })
            }
        }
    }
}

export default WorldRunner