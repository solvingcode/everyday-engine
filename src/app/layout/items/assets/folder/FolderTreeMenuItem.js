import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import ListMenuItem from '../../list/ListMenuItem.js'
import FolderElementFormMenuItem from './FolderElementFormMenuItem.js'

export default class FolderTreeMenuItem extends ListMenuItem{

    constructor(parent, props) {
        super({
            zone: Layout.zone.BOTTOM,
            type: Layout.type.TREE,
            ...props
        })
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return FolderElementFormMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getAssetsManager().findFolders(null)
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }


}