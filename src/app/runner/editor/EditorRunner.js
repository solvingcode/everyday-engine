import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import MoveCameraAction from '../action/camera/MoveCameraAction.js'
import ZoomInOutCameraAction from '../action/camera/ZoomInOutCameraAction.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import MoveAction from '../action/edit/MoveAction.js'
import ScaleAction from '../action/edit/ScaleAction.js'
import RotateAction from '../action/edit/RotateAction.js'
import {objectCanvas} from '../../core/Context.js'
import Vector from '../../utils/Vector.js'
import UnitSelector from '../../selector/UnitSelector.js'
import UnitHelper from '../../utils/UnitHelper.js'
import GUIMoveXComponent from '../../component/internal/gui/move/GUIMoveXComponent.js'
import Size from '../../pobject/Size.js'
import GUIMoveYComponent from '../../component/internal/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../component/internal/gui/move/GUIMoveFreeComponent.js'
import GUIScaleXComponent from '../../component/internal/gui/scale/GUIScaleXComponent.js'
import GUIScaleYComponent from '../../component/internal/gui/scale/GUIScaleYComponent.js'
import GUIScaleFreeComponent from '../../component/internal/gui/scale/GUIScaleFreeComponent.js'
import GUIRotateComponent from '../../component/internal/gui/rotate/GUIRotateComponent.js'
import MoveXUnitInstant from '../../unit/instant/type/internal/move/MoveXUnitInstant.js'
import MoveYUnitInstant from '../../unit/instant/type/internal/move/MoveYUnitInstant.js'
import MoveFreeUnitInstant from '../../unit/instant/type/internal/move/MoveFreeUnitInstant.js'
import ScaleXUnitInstant from '../../unit/instant/type/internal/scale/ScaleXUnitInstant.js'
import ScaleYUnitInstant from '../../unit/instant/type/internal/scale/ScaleYUnitInstant.js'
import ScaleFreeUnitInstant from '../../unit/instant/type/internal/scale/ScaleFreeUnitInstant.js'
import RotateZUnitInstant from '../../unit/instant/type/internal/rotate/RotateZUnitInstant.js'
import GUIGridComponent from '../../component/internal/gui/grid/GUIGridComponent.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import Window from '../../core/Window.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import GridXUnitInstant from '../../unit/instant/type/internal/grid/GridXUnitInstant.js'
import GUIGridYComponent from '../../component/internal/gui/grid/GUIGridYComponent.js'
import GUIGridXComponent from '../../component/internal/gui/grid/GUIGridXComponent.js'
import GridYUnitInstant from '../../unit/instant/type/internal/grid/GridYUnitInstant.js'
import GUIColliderComponent from '../../component/internal/gui/collider/GUIColliderComponent.js'
import EmptyUnit from '../../unit/type/EmptyUnit.js'

class EditorRunner extends Runner {

    /**
     * @type {EditorRunner}
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
     */
    execute() {
        const mouse = Window.get().mouse
        const stateManager = StateManager.get()
        if (!stateManager.isRunning() && !stateManager.isFormUpdating()) {
            this.updateMouseWheel(stateManager, mouse)
            if (!World.get().getScriptManager().getSelected(World.get().getTabManager())) {
                this.handleUnitEvent(stateManager, mouse)
                this.selectUnits(stateManager, mouse)
                this.focusUnits(mouse)
                this.setupEditor(stateManager)
                this.createGridEntity()
            }
        }
    }

    /**
     * @todo: need to be revisited
     */
    createGridEntity() {
        const world = World.get()
        const camera = world.getCamera()
        const windowSize = Window.get().size
        const unitManager = world.getUnitManager()
        const position = new Vector()
        this.unitGridChildIds = (this.unitGridChildIds || [])
        let chunkIds = []
        if (world.isShowGrid()) {
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
                    const positionChunk = new Vector({x, y})

                    const unitGridExist = unitManager.getUnitsHasComponents([GUIGridComponent])
                        .find(unit => unit.getComponent(TransformComponent).getPosition().equals(positionChunk))
                    const unitGrid = unitGridExist || world.createUnitInstant(GridUnitInstant, positionChunk, sizeChunk)

                    const unitGridXExist = unitManager.getUnitsHasComponents([GUIGridXComponent])
                        .find(unit => unit.getComponent(TransformComponent).getPosition().equals(positionChunk))
                    const unitGridX = unitGridXExist || world.createUnitInstant(GridXUnitInstant, positionChunk, sizeChunk)

                    const unitGridYExist = unitManager.getUnitsHasComponents([GUIGridYComponent])
                        .find(unit => unit.getComponent(TransformComponent).getPosition().equals(positionChunk))
                    const unitGridY = unitGridYExist || world.createUnitInstant(GridYUnitInstant, positionChunk, sizeChunk)

                    chunkIds = chunkIds.concat([unitGrid.getId(), unitGridX.getId(), unitGridY.getId()])
                })
            }
        }
        this.unitGridChildIds
            .filter(childId => !chunkIds.includes(childId))
            .forEach(childId => {
                unitManager.tryDeleteUnitById(childId)
            })
        this.unitGridChildIds = chunkIds
    }

    /**
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    updateMouseWheel(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
            if (!stateManager.isProgress(MoveCameraAction.STATE)) {
                stateManager.startState(MoveCameraAction.STATE, 1)
            }
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
                    if (unit.hasAnyComponents([GUIMoveXComponent, GUIMoveYComponent, GUIMoveFreeComponent])) {
                        !stateManager.isProgress(MoveAction.STATE) &&
                        stateManager.startState(MoveAction.STATE, 1, {unit})
                    }
                    if (unit.hasAnyComponents([GUIScaleXComponent, GUIScaleYComponent, GUIScaleFreeComponent])) {
                        !stateManager.isProgress(ScaleAction.STATE) &&
                        stateManager.startState(ScaleAction.STATE, 1, {unit})
                    } else if (unit.hasComponents([GUIRotateComponent])) {
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
     * @todo: Need some refactoring
     */
    setupEditor(stateManager) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const moveComponentClasses = [GUIMoveXComponent, GUIMoveYComponent, GUIMoveFreeComponent]
        const scaleComponentClasses = [GUIScaleXComponent, GUIScaleYComponent, GUIScaleFreeComponent]
        const rotateComponentClasses = [GUIRotateComponent]
        const colliderComponentClasses = [GUIColliderComponent]

        //Delete move/scale/rotate tools
        unitManager.getUnitsHasAnyComponents([]
            .concat(moveComponentClasses, scaleComponentClasses, rotateComponentClasses, colliderComponentClasses))
            .forEach(unit => unitManager.deleteUnit(unit))

        //get selected units
        const selectedUnits = UnitSelector.get().getSelected(world).filter(unit => unit instanceof EmptyUnit)

        //find the editor position
        let editorPosition = selectedUnits
            .reduce((position, unit) => UnitHelper.toLargeCenterPosition(unit), null)

        //create collider unit if one unit is selected
        if (selectedUnits.length === 1) {
            const selectedUnit = selectedUnits[0]
            const colliderUnits = UnitHelper.createGUICollider(selectedUnit, world)
            if(colliderUnits.length){
                editorPosition = UnitHelper.toLargeCenterPosition(colliderUnits[0])
            }
        }

        if (editorPosition) {
            if (stateManager.hasAnyState('DRAW_MOVE')) {
                moveComponentClasses.forEach(componentClass => {
                    if (componentClass === GUIMoveXComponent) {
                        world.createUnitInstant(MoveXUnitInstant, componentClass, editorPosition)
                    } else if (componentClass === GUIMoveYComponent) {
                        world.createUnitInstant(MoveYUnitInstant, componentClass, editorPosition)
                    } else if (componentClass === GUIMoveFreeComponent) {
                        world.createUnitInstant(MoveFreeUnitInstant, componentClass, editorPosition)
                    }
                })
            } else if (stateManager.hasAnyState('DRAW_SCALE')) {
                scaleComponentClasses.forEach(componentClass => {
                    if (componentClass === GUIScaleXComponent) {
                        world.createUnitInstant(ScaleXUnitInstant, componentClass, editorPosition)
                    } else if (componentClass === GUIScaleYComponent) {
                        world.createUnitInstant(ScaleYUnitInstant, componentClass, editorPosition)
                    } else if (componentClass === GUIScaleFreeComponent) {
                        world.createUnitInstant(ScaleFreeUnitInstant, componentClass, editorPosition)
                    }
                })
            } else if (stateManager.hasAnyState('DRAW_ROTATE')) {
                rotateComponentClasses.forEach(componentClass => {
                    world.createUnitInstant(RotateZUnitInstant, componentClass, editorPosition)
                })
            }
        }
    }
}

export default EditorRunner