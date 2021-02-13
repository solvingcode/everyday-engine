import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import EntitySelector from '../../world/manager/EntitySelector.js'
import MoveCameraAction from '../action/camera/MoveCameraAction.js'
import ZoomInOutCameraAction from '../action/camera/ZoomInOutCameraAction.js'
import World from '../../world/World.js'
import Mouse from '../../core/Mouse.js'
import MoveXEntity from '../../entity/types/component/move/MoveXEntity.js'
import MoveYEntity from '../../entity/types/component/move/MoveYEntity.js'

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
            this.selectMoveEntities(stateManager, mouse)
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
    selectMoveEntities(stateManager, mouse) {
        if (stateManager.isProgress('DRAW_SELECT')) {
            !this.moveEntities(stateManager, mouse) && this.selectEntities(stateManager, mouse)
        }
    }

    /**
     * Move on drag/drop if the mouse click position is a selected entity
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    moveEntities(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const world = World.get()
            const entitySelector = EntitySelector.get()
            const selectedEntities = entitySelector.getSelected(world)
            const currentScenePosition = world.getCamera().fromCameraScale(mouse.currentScenePosition)
            if (selectedEntities.length) {
                const triggerEntity = entitySelector.get(world, world.getWorldPosition(currentScenePosition))
                const isEntityMove = triggerEntity && selectedEntities.includes(triggerEntity)
                if (isEntityMove) {
                    stateManager.startState('ACTION_MOVE', 1)
                    return true
                } else {
                    stateManager.stopState('ACTION_MOVE', 1)
                }
            }
        } else {
            stateManager.isProgress('ACTION_MOVE')
            && stateManager.stopState('ACTION_MOVE', 1)
        }
        return false
    }

    /**
     * Select entities on drag/drop
     * @param {StateManager} stateManager
     * @param {Mouse} mouse
     */
    selectEntities(stateManager, mouse) {
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            const world = World.get()
            const dragArea = mouse.getDragArea(world.getCamera())
            const selectEntities = world.selectEntities(dragArea)
            this.setupMoveEditor(selectEntities)
        }
    }

    /**
     * @param {Entity[]} selectedEntities
     */
    setupMoveEditor(selectedEntities){
        const world = World.get()
        world.removeEntityByType([MoveXEntity, MoveYEntity])
        let moveEditorPosition = selectedEntities
            .reduce((position, entity) => entity.toCenterPosition(), null)
        if(moveEditorPosition){
            world.addEntity(moveEditorPosition, MoveXEntity)
            world.addEntity(moveEditorPosition, MoveYEntity)
        }
    }

    static get() {
        if (!WorldRunner.instance) {
            WorldRunner.instance = new WorldRunner()
        }
        return WorldRunner.instance
    }
}

export default WorldRunner