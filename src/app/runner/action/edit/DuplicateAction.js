import Action from '../Action.js'
import World from '../../../world/World.js'

/**
 * Duplicate Action
 * Allow to duplicate (clone) an entity
 */
class DuplicateAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedEntities, entitySelector) {
        const entityManager = World.get().getEntityManager()
        entitySelector.unselectAll()
        const clones = entityManager.cloneEntities(selectedEntities)
        clones.forEach(entity => entity.select())
        entityManager.concatEntities(clones)
        return true
    }

}

export default DuplicateAction