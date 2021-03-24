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
import GridEntity from '../../entity/types/component/grid/GridEntity.js'
import Vector from '../../utils/Vector.js'
import UnitSelector from '../../manager/UnitSelector.js'
import UnitHelper from '../../unit/UnitHelper.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import GUIMoveXComponent from '../../component/gui/move/GUIMoveXComponent.js'
import GUIPropertyComponent from '../../component/gui/property/GUIPropertyComponent.js'
import Size from '../../pobject/Size.js'
import Style from '../../pobject/Style.js'
import MeshComponent from '../../component/MeshComponent.js'
import GUIPendingComponent from '../../component/gui/GUIPendingComponent.js'
import GUIMoveYComponent from '../../component/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../component/gui/move/GUIMoveFreeComponent.js'
import GUIMoveComponent from '../../component/gui/move/GUIMoveComponent.js'
import GUIScaleXComponent from '../../component/gui/scale/GUIScaleXComponent.js'
import GUIScaleYComponent from '../../component/gui/scale/GUIScaleYComponent.js'
import GUIScaleFreeComponent from '../../component/gui/scale/GUIScaleFreeComponent.js'
import GUIScaleComponent from '../../component/gui/scale/GUIScaleComponent.js'
import GUIRotateComponent from '../../component/gui/rotate/GUIRotateComponent.js'

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
            //this.createGridEntity()
        }
    }

    createGridEntity() {
        const world = World.get()
        const gridEntityClass = GridEntity
        if(world.isShowGrid()){
            if(!world.getGridEntityId()){
                world.removeEntityByType([gridEntityClass])
                const gridEntity = world.loadEntity(new Vector({x: 0, y: 0}), gridEntityClass)
                world.setGridEntityId(gridEntity.getId())
            }
        }else{
            world.removeEntityByType([gridEntityClass])
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
                    let size, style, shape, position = new Vector()
                    if(componentClass === GUIMoveXComponent){
                        size = new Size({width: 100, height: 30})
                        style = new Style()
                        style.setColor('#FF0000')
                        style.setBorderSize(4)
                        shape = PrimitiveShape.ARROW_RIGHT
                        position.setX(editorPosition.getX())
                        position.setY(editorPosition.getY() - size.getHeight() / 2)
                    }else if(componentClass === GUIMoveYComponent){
                        size = new Size({width: 30, height: 100})
                        style = new Style()
                        style.setColor('#0000FF')
                        style.setBorderSize(4)
                        shape = PrimitiveShape.ARROW_DOWN
                        position.setX(editorPosition.getX() - size.getWidth() / 2)
                        position.setY(editorPosition.getY())
                    }else if(componentClass === GUIMoveFreeComponent){
                        size = new Size({width: 100, height: 100})
                        style = new Style()
                        style.setColor('#CCCCCC')
                        style.setBorderSize(2)
                        shape = PrimitiveShape.CIRCLE
                        position.setX(editorPosition.getX() - size.getWidth() / 2)
                        position.setY(editorPosition.getY() - size.getHeight() / 2)
                    }
                    const unit = unitManager.createPrimitiveUnit(shape, position)
                    unit.createComponent(componentClass)
                    unit.createComponent(GUIPendingComponent)
                    unit.getComponent(GUIPropertyComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setSize(size)
                })
            }
            else if(stateManager.hasAnyState('DRAW_SCALE')){
                scaleComponentClasses.forEach(componentClass => {
                    let size, style, shape, position = new Vector()
                    if(componentClass === GUIScaleXComponent){
                        size = new Size({width: 100, height: 30})
                        style = new Style()
                        style.setColor('#FF0000')
                        style.setBorderSize(4)
                        shape = PrimitiveShape.ARROW_RECT_RIGHT
                        position.setX(editorPosition.getX())
                        position.setY(editorPosition.getY() - size.getHeight() / 2)
                    }else if(componentClass === GUIScaleYComponent){
                        size = new Size({width: 30, height: 100})
                        style = new Style()
                        style.setColor('#0000FF')
                        style.setBorderSize(4)
                        shape = PrimitiveShape.ARROW_RECT_DOWN
                        position.setX(editorPosition.getX() - size.getWidth() / 2)
                        position.setY(editorPosition.getY())
                    }else if(componentClass === GUIScaleFreeComponent){
                        size = new Size({width: 120, height: 120})
                        style = new Style()
                        style.setColor('#CCCCCC')
                        style.setBorderSize(2)
                        shape = PrimitiveShape.CIRCLE
                        position.setX(editorPosition.getX() - size.getWidth() / 2)
                        position.setY(editorPosition.getY() - size.getHeight() / 2)
                    }
                    const unit = unitManager.createPrimitiveUnit(shape, position)
                    unit.createComponent(componentClass)
                    unit.createComponent(GUIPendingComponent)
                    unit.getComponent(GUIPropertyComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setSize(size)
                })
            }else if(stateManager.hasAnyState('DRAW_ROTATE')){
                rotateComponentClasses.forEach(componentClass => {
                    const size = new Size({width: 100, height: 100})
                    const style = new Style()
                    style.setColor('#00FF00')
                    style.setBorderSize(2)
                    const shape = PrimitiveShape.CIRCLE
                    const position = new Vector()
                    position.setX(editorPosition.getX() - size.getWidth() / 2)
                    position.setY(editorPosition.getY() - size.getHeight() / 2)
                    const unit = unitManager.createPrimitiveUnit(shape, position)
                    unit.createComponent(componentClass)
                    unit.createComponent(GUIPendingComponent)
                    unit.getComponent(GUIPropertyComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setStyle(style)
                    unit.getComponent(MeshComponent).setSize(size)
                })
            }
        }
    }
}

export default WorldRunner