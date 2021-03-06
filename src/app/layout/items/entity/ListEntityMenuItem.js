import World from '../../../world/World.js'
import ListFormMenuItem from '../form/ListFormMenuItem.js'
import HideItemMenuItem from '../action/HideItemMenuItem.js'
import ShowItemMenuItem from '../action/ShowItemMenuItem.js'
import LockItemMenuItem from '../action/LockItemMenuItem.js'
import UnlockItemMenuItem from '../action/UnlockItemMenuItem.js'

/**
 * Layer Menu Item
 * Menu responsible for managing entities (z-index, ...)
 */
class ListEntityMenuItem extends ListFormMenuItem {

    constructor(parent, props) {
        super(props)
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getEntityManager().getManagedEntities()
            .filter(entity => !entity.isSubEntity() && entity.isValid()).reverse()
    }

    /**
     * @override
     * @param {Entity} bindObject
     */
    getActions(bindObject){
        return [
            new HideItemMenuItem(bindObject),
            new ShowItemMenuItem(bindObject),
            new LockItemMenuItem(bindObject),
            new UnlockItemMenuItem(bindObject)
        ]
    }
}

export default ListEntityMenuItem