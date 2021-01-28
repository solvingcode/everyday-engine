import Action from '../Action.js'
import World from '../../../world/World.js'

class DeleteAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedEntities) {
        const entityManager = World.get().getEntityManager()
        selectedEntities.forEach(entity => entityManager.delete(entity))
        return true
    }

}

export default DeleteAction