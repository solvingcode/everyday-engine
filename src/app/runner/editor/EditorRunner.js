import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import MoveCameraAction from '../action/camera/MoveCameraAction.js'
import ZoomInOutCameraAction from '../action/camera/ZoomInOutCameraAction.js'
import World from '../../world/World.js'
import {MouseButton} from '../../core/Mouse.js'
import MoveAction from '../action/edit/MoveAction.js'
import ScaleAction from '../action/edit/ScaleAction.js'
import RotateAction from '../action/edit/RotateAction.js'
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
import MeshUnit from '../../unit/type/MeshUnit.js'
import GUISelectorComponent from '../../component/internal/gui/selector/GUISelectorComponent.js'
import GUIAnchorComponent from '../../component/internal/gui/anchor/GUIAnchorComponent.js'
import UITransformComponent from '../../component/internal/ui/UITransformComponent.js'
import Menu from '../../layout/Menu.js'
import ContentCanvasMenuItem from '../../layout/items/content/ContentCanvasMenuItem.js'

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
        if (mouse.getMouseWheel().y) {
            const itemTarget = Menu.get().getUIRenderer().getItemAt(mouse)
            if(itemTarget && itemTarget.element instanceof ContentCanvasMenuItem){
                stateManager.startState(ZoomInOutCameraAction.STATE, 1,
                    {deltaY: mouse.getMouseWheel().y})
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
     */
    setupEditor(stateManager) {
        const world = World.get()
        const selectedUnits = UnitSelector.get().getSelected(world)
        const selectedUnitsWithMesh = selectedUnits.filter(unit => unit instanceof MeshUnit)
        const targetUnit = this.setupColliderEditor(selectedUnitsWithMesh) || selectedUnits[0]
        this.setupTransformEditor(stateManager, targetUnit)
        this.setupSelectorEditor(selectedUnits)
        this.setupAnchorEditor(selectedUnits)
    }

    /**
     * @param {Unit[]} selectedUnits
     * @return {Unit}
     */
    setupColliderEditor(selectedUnits) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        if (selectedUnits.length === 1) {
            const selectedUnit = selectedUnits[0]
            const exitGUIColliders = unitManager.getUnitsHasComponents([GUIColliderComponent])
            unitManager.deleteUnits(exitGUIColliders
                .filter(unit => unit.getComponent(GUIColliderComponent).getUnitId() !== selectedUnit.getId()))
            const colliderUnits = UnitHelper.createGUICollider(selectedUnit, world)
            if (colliderUnits.length) {
                return colliderUnits[0]
            }
        } else {
            unitManager.deleteUnitsByComponents([GUIColliderComponent])
        }
    }

    /**
     * @param {StateManager} stateManager
     * @param {Unit} targetUnit
     */
    setupTransformEditor(stateManager, targetUnit) {
        const world = World.get()
        const unitManager = world.getUnitManager()

        const editorPosition = targetUnit && targetUnit.getComponent(TransformComponent)
            && UnitHelper.toLargeCenterPosition(targetUnit)

        const editorComponents = {
            DRAW_MOVE: [MoveXUnitInstant, MoveYUnitInstant, MoveFreeUnitInstant],
            DRAW_SCALE: [ScaleXUnitInstant, ScaleYUnitInstant, ScaleFreeUnitInstant],
            DRAW_ROTATE: [RotateZUnitInstant]
        }
        for (const action in editorComponents) {
            const unitInstants = editorComponents[action]
            unitInstants.forEach(unitInstantClass => {
                const unitExist = unitManager.findUnitByType(unitInstantClass)
                if (stateManager.hasAnyState(action) && !unitExist && editorPosition) {
                    world.createChildUnitInstant(unitInstantClass, targetUnit, editorPosition)
                } else if (unitExist && (
                    !stateManager.hasAnyState(action) ||
                    (targetUnit && unitExist.getUnitParentId() !== targetUnit.getId()) ||
                    !targetUnit
                )) {
                    unitManager.deleteUnit(unitExist)
                }
            })
        }
    }

    /**
     * @param {Unit[]} selectedUnits
     */
    setupSelectorEditor(selectedUnits) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        if (selectedUnits.length === 1) {
            const selectedUnitIds = selectedUnits.map(unit => unit.getId())
            const exitGUISelectors = unitManager.getUnitsHasComponents([GUISelectorComponent])
            unitManager.deleteUnits(exitGUISelectors
                .filter(unit => !selectedUnitIds.includes(unit.getComponent(GUISelectorComponent).getUnitId())))
            selectedUnits.forEach(selectedUnit => {
                if (selectedUnit.getComponent(TransformComponent)) {
                    const existGUISelector = exitGUISelectors
                        .find(guiUnit => guiUnit.getComponent(GUISelectorComponent).getUnitId() === selectedUnit.getId())
                    if (!existGUISelector) {
                        UnitHelper.createGUISelector(selectedUnit, world)
                    }
                }
            })
        } else {
            unitManager.deleteUnitsByComponents([GUISelectorComponent])
        }
    }

    /**
     * @param {Unit[]} selectedUnits
     */
    setupAnchorEditor(selectedUnits) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        if (selectedUnits.length === 1) {
            const selectedUnit = selectedUnits[0]
            if (selectedUnit.getComponent(UITransformComponent)) {
                const exitGUIAnchors = unitManager.getUnitsHasComponents([GUIAnchorComponent])
                unitManager.deleteUnits(exitGUIAnchors
                    .filter(unit => unit.getComponent(GUIAnchorComponent).getUnitId() !== selectedUnit.getId()))
                UnitHelper.createGUIAnchor(selectedUnit, world)
            } else {
                unitManager.deleteUnitsByComponents([GUIAnchorComponent])
            }
        } else {
            unitManager.deleteUnitsByComponents([GUIAnchorComponent])
        }
    }
}

export default EditorRunner