import Action from '../Action.js'
import World from '../../../world/World.js'

class MoveAction extends Action {

    /**
     * Move selected entities
     * @param {Mouse} mouse
     * @param {Array} selectedEntities
     */
    static run(mouse, selectedEntities) {
        const world = World.get()
        const camera = world.getCamera()
        const entityManager = world.getEntityManager()
        const instance = MoveAction.get()
        const dragDistance = mouse.getDragDistanceCamera(camera)
        const scenePosition = camera.fromCameraScale(mouse.scenePosition)
        instance.position = World.get().getWorldPosition(scenePosition)
        instance.relativeEntityPositions = instance.relativeEntityPositions ||
            selectedEntities.map(entity => entity.fromAbsolutePosition(instance.position))
        const targetPoint = {x: instance.position.x + dragDistance.x, y: instance.position.y + dragDistance.y}
        selectedEntities.map((entity, index) => {
            entity.moveRelativePointTo(entityManager, instance.relativeEntityPositions[index], targetPoint)
        })
        return false
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