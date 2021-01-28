import Action from '../Action.js'

/**
 * Physics Static action
 */
class PhysicsStaticAction extends Action {

    /**
     * Make the entity static (not move)
     * @param {Mouse} mouse
     * @param {Array} selectedEntities
     */
    static run(mouse, selectedEntities) {
        selectedEntities.map(entity => entity.setStatic(true))
        return true
    }

}

export default PhysicsStaticAction