import ListFormMenuItem from '../form/ListFormMenuItem.js'
import World from '../../../world/World.js'

/**
 * @class {ListTextureFormMenuItem}
 */
class ListTextureFormMenuItem extends ListFormMenuItem {

    constructor(parent, props) {
        super(props)
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getTextureManager().getTextures()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}

export default ListTextureFormMenuItem