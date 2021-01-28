import Action from '../Action.js'

/**
 * Physics Static action
 */
class PhysicsNotStaticAction extends Action {

    /**
     * Make the entity not  static (move)
     * @param {Mouse} mouse
     * @param {Array} selectedEntities
     */
    static run(mouse, selectedEntities) {
        selectedEntities.map(entity => entity.setFixed(false))
        return true
    }

}

export default PhysicsNotStaticAction