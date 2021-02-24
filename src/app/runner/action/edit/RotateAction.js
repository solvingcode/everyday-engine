import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'

export default class RotateAction extends Action {

    static instance = null

    static STATE = 'ACTION_ROTATE'

    /**
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     */
    static run(mouse, selectedEntities) {
        const {entity} = StateManager.get().getNextProgressData(this.STATE)
        this.rotateEntities(mouse, selectedEntities, entity)
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     * @param {Entity} rotateEntity
     */
    static rotateEntities(mouse, selectedEntities, rotateEntity){
        const world = World.get()
        const scenePosition = world.getWorldScalePosition(mouse.scenePosition)
        const currentScenePosition = world.getWorldScalePosition(mouse.currentScenePosition)
        mouse.dragAndDrop(world.getCamera())
        const vectorStart = rotateEntity.fromAbsolutePosition(scenePosition)
        const vectorEnd = rotateEntity.fromAbsolutePosition(currentScenePosition)
        const angleRadian = Vector.angle(vectorStart, vectorEnd)
        selectedEntities.map((entity) => {
            entity.rotate(angleRadian)
        })
    }

    /**
     * Stop the move action
     */
    static stop(mouse, selectedEntities) {
        selectedEntities.map(entity => World.get().generateEntity(entity))
        return true
    }

}