import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import MoveCenterEntity from '../../../entity/types/component/move/MoveCenterEntity.js'
import Vector from '../../../utils/Vector.js'
import MoveXEntity from '../../../entity/types/component/move/MoveXEntity.js'
import MoveYEntity from '../../../entity/types/component/move/MoveYEntity.js'

class MoveAction extends Action {

    static STATE = 'ACTION_MOVE'

    /**
     * Move selected entities
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     */
    static run(mouse, selectedEntities) {
        const {entity} = StateManager.get().getNextProgressData(this.STATE)
        let direction

        if(entity instanceof MoveCenterEntity){
            direction = new Vector({x: 1, y: 1})
        }else if(entity instanceof MoveXEntity){
            direction = new Vector({x: 1, y: 0})
        }else if(entity instanceof MoveYEntity){
            direction = new Vector({x: 0, y: 1})
        }

        if(direction){
            this.moveEntities(mouse, selectedEntities, direction)
        }
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     * @param {Vector} direction
     */
    static moveEntities(mouse, selectedEntities, direction){
        const world = World.get()
        const camera = world.getCamera()
        const entityManager = world.getEntityManager()
        const instance = MoveAction.get()
        const dragDistance = mouse.getDragDistanceCamera(camera)
        const scenePosition = camera.fromCameraScale(mouse.scenePosition)
        instance.position = World.get().getWorldPosition(scenePosition)
        instance.relativeEntityPositions = instance.relativeEntityPositions ||
            selectedEntities.map(entity => entity.fromAbsolutePosition(instance.position))
        const targetPoint = new Vector({
            x: instance.position.x + dragDistance.x * direction.x,
            y: instance.position.y + dragDistance.y * direction.y
        })
        selectedEntities.map((entity, index) => {
            entity.moveRelativePointTo(entityManager, instance.relativeEntityPositions[index], targetPoint)
        })
    }

    /**
     * Stop the move action
     */
    static stop(mouse, selectedEntities) {
        const instance = MoveAction.get()
        instance.relativeEntityPositions = null
        instance.position = null
        selectedEntities.map(entity => World.get().generateEntity(entity))
        return true
    }

    static get() {
        if (!MoveAction.instance) {
            MoveAction.instance = new MoveAction()
        }
        return MoveAction.instance
    }

}

MoveAction.instance = null

export default MoveAction