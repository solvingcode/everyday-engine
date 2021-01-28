import Action from '../Action.js'
import World from '../../../world/World.js'

class MoveDownAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedEntities) {
        const entityManager = World.get().getEntityManager()
        selectedEntities.forEach(entity => entityManager.moveDown((entity)))
        return true
    }

}

export default MoveDownAction