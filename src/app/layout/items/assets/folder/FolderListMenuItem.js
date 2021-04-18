import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import ListMenuItem from '../../list/ListMenuItem.js'
import FolderElementMenuItem from './FolderElementMenuItem.js'

export default class FolderListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {number|null} folderId
     */
    constructor(parent, props = {}, folderId = null) {
        super({
            zone: Layout.zone.BOTTOM,
            ...props
        })
        this.data = folderId
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return FolderElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getAssetsManager().findFolders(this.data)
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}