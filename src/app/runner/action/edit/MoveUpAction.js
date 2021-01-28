import Action from '../Action.js'
import World from '../../../world/World.js'

class MoveUpAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedEntities) {
        const entityManager = World.get().getEntityManager()
        selectedEntities.forEach(entity => entityManager.moveUp((entity)))
        return true
    }

}

export default MoveUpAction