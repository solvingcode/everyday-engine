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
            this.setupMoveEditor()
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
            stateManager.isProgress('DRAW_SELECT') &&
            !stateManager.hasState(MoveAction.STATE, 1)) {
            const world = World.get()
            const dragArea = mouse.getDragArea(world.getCamera())
            world.selectEntities(dragArea)
        }
    }

    /**
     * Handle action when entity's event is triggered (like click, drag, ...)
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    handleEntityEvent(stateManager, mouse){
        if(stateManager.isProgress('DRAW_SELECT')){
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                if(!stateManager.isProgress(MoveAction.STATE)){
                    const world = World.get()
                    const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
                    const entity = world.findFirstEntityByPosition(world.getWorldPosition(currentScenePosition))
                    const dragArea = mouse.getDragArea(world.getCamera())
                    if(dragArea){
                        if(entity instanceof MoveEntity){
                            stateManager.startState(MoveAction.STATE, 1, {entity})
                        }
                    }
                }
            } else {
                stateManager.isProgress(MoveAction.STATE)
                && stateManager.stopState(MoveAction.STATE, 1)
            }
        }

    }

    setupMoveEditor(){
        const world = World.get()
        const selectedEntities = EntitySelector.get().getSelected(world)
        const moveEntityClasses = [MoveXEntity, MoveYEntity, MoveCenterEntity]
        world.removeEntityByType(moveEntityClasses)
        let moveEditorPosition = selectedEntities
            .reduce((position, entity) => entity.toCenterPosition(), null)
        if(moveEditorPosition){
            moveEntityClasses.forEach(entityClass => world.addEntity(moveEditorPosition, entityClass))
        }
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default WorldRunner