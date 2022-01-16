import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'

export default class FolderTitleMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Folder} folder
     */
    constructor(parent, folder) {
        super({
            name: 'folder',
            title: folder.getName(),
            stateCode: 'ACTION_SELECT_FOLDER',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {folder}
    }

    /**
     * @override
     */
    doUpdate() {
        const folderName = this.data.folder.getName()
        if(this.props.title !== folderName){
            this.props.title = folderName
            return true
        }
    }

    doSetData(data) {
    }
}