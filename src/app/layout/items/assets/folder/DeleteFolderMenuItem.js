import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class DeleteFolderMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'folder-minus',
            title: 'Delete folder',
            stateCode: 'CONFIRM_ACTION_DELETE_FOLDER',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && World.get().getAssetsManager().getSelectedFolder()
    }
}
