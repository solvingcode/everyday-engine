import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import EntitySelector from '../../world/manager/EntitySelector.js'
import MoveCameraAction from '../action/camera/MoveCameraAction.js'
import ZoomInOutCameraAction from '../action/camera/ZoomInOutCameraAction.js'
import World from '../../world/World.js'
import Mouse from '../../core/Mouse.js'
import MoveXEntity from '../../entity/types/component/move/MoveXEntity.js'
import MoveYEntity from '../../entity/types/component/move/MoveYEntity.js'
import MoveCenterEntity from '../../entity/types/component/move/MoveCenterEntity.js'
import MoveEntity from '../../entity/types/component/move/MoveEntity.js'
import MoveAction from '../action/edit/MoveAction.js'
import ScaleXEntity from '../../entity/types/component/scale/ScaleXEntity.js'
import ScaleYEntity from '../../entity/types/component/scale/ScaleYEntity.js'
import ScaleCenterEntity from '../../entity/types/component/scale/ScaleCenterEntity.js'
import ScaleEntity from '../../entity/types/component/scale/ScaleEntity.js'
import ScaleAction from '../action/edit/ScaleAction.js'
import RotateEntity from '../../entity/types/component/rotate/RotateEntity.js'
import RotateAction from '../action/edit/RotateAction.js'
import RotateZEntity from '../../entity/types/component/rotate/RotateZEntity.js'

const {MouseButton} = Mouse

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
        if (!stateManager.isRunning()) {
            this.updateMouseWheel(stateManager, mouse)
            this.handleEntityEvent(stateManager, mouse)
            this.selectEntities(stateManager, mouse)
            this.setupEditor(stateManager)
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
        if (mouse.getMouseWheel().y) {
            stateManager.startState(ZoomInOutCameraAction.STATE, 1,
                {deltaY: mouse.getMouseWheel().y})
        }
    }

    /**
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    selectEntities(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT) &&
            this.isSelectEdit(stateManager) &&
            !stateManager.hasState(MoveAction.STATE, 1) &&
            !stateManager.hasState(ScaleAction.STATE, 1) &&
            !stateManager.hasState(RotateAction.STATE, 1)) {
            const world = World.get()
            const dragArea = mouse.getDragArea(world.getCamera())
            world.selectEntities(dragArea)
        }
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isSelectEdit(stateManager){
        return stateManager.isProgress('DRAW_SELECT') ||
            stateManager.isProgress('DRAW_SCALE') ||
            stateManager.isProgress('DRAW_ROTATE')
    }

    /**
     * Handle action when entity's event is triggered (like click, drag, ...)
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    handleEntityEvent(stateManager, mouse){
        if(this.isSelectEdit(stateManager)){
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const world = World.get()
                const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
                const entity = world.findFirstEntityByPosition(world.getWorldPosition(currentScenePosition))
                const dragArea = mouse.getDragArea(world.getCamera())
                if(dragArea){
                    if(entity instanceof MoveEntity){
                        !stateManager.isProgress(MoveAction.STATE) &&
                        stateManager.startState(MoveAction.STATE, 1, {entity})
                    }else if(entity instanceof ScaleEntity){
                        !stateManager.isProgress(ScaleAction.STATE) &&
                        stateManager.startState(ScaleAction.STATE, 1, {entity})
                    }else if(entity instanceof RotateEntity){
                        !stateManager.isProgress(RotateAction.STATE) &&
                        stateManager.startState(RotateAction.STATE, 1, {entity})
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
        const selectedEntities = EntitySelector.get().getSelected(world)
        const moveEntityClasses = [MoveXEntity, MoveYEntity, MoveCenterEntity]
        const scaleEntityClasses = [ScaleXEntity, ScaleYEntity, ScaleCenterEntity]
        const rotateEntityClasses = [RotateZEntity]
        world.removeEntityByType([].concat(moveEntityClasses, scaleEntityClasses, rotateEntityClasses))
        let editorPosition = selectedEntities
            .reduce((position, entity) => entity.toLargeCenterPosition(), null)
        if(editorPosition) {
            if(stateManager.hasAnyState('DRAW_SELECT')){
                moveEntityClasses.forEach(entityClass => world.addEntity(editorPosition, entityClass))
            }else if(stateManager.hasAnyState('DRAW_SCALE')){
                scaleEntityClasses.forEach(entityClass => world.addEntity(editorPosition, entityClass))
            }else if(stateManager.hasAnyState('DRAW_ROTATE')){
                rotateEntityClasses.forEach(entityClass => world.addEntity(editorPosition, entityClass))
            }
        }
    }
}

export default WorldRunner