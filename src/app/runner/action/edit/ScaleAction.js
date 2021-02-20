import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import ScaleCenterEntity from '../../../entity/types/component/scale/ScaleCenterEntity.js'
import ScaleXEntity from '../../../entity/types/component/scale/ScaleXEntity.js'
import ScaleYEntity from '../../../entity/types/component/scale/ScaleYEntity.js'
import Size from '../../../pobject/Size.js'

export default class ScaleAction extends Action {

    static instance = null

    static STATE = 'ACTION_SCALE'

    /**
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     */
    static run(mouse, selectedEntities) {
        const {entity} = StateManager.get().getNextProgressData(this.STATE)
        let direction

        if(entity instanceof ScaleCenterEntity){
            direction = new Vector({x: 1, y: 1})
        }else if(entity instanceof ScaleXEntity){
            direction = new Vector({x: 1, y: 0})
        }else if(entity instanceof ScaleYEntity){
            direction = new Vector({x: 0, y: 1})
        }

        if(direction){
            this.scaleEntities(mouse, selectedEntities, direction)
        }
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Entity[]} selectedEntities
     * @param {Vector} direction
     */
    static scaleEntities(mouse, selectedEntities, direction){
        const world = World.get()
        const camera = world.getCamera()
        const dragDistance = mouse.dragAndDrop(camera)
        selectedEntities.map((entity) => {
            const width = entity.getWidth() + dragDistance.x * direction.x
            const height = entity.getHeight() + (direction.x ? dragDistance.x : dragDistance.y) * direction.y
            entity.setSizeAndGenerate(new Size({width, height}))
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