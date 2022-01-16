import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import FormMenuItem from '../../form/FormMenuItem.js'

export default class EditFolderFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'name',
                label: 'Folder',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     * @return {Folder}
     */
    getFormObject() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder()
        const rootFolder = assetsManager.getRootFolder()
        if(selectedFolder !== rootFolder){
            return selectedFolder
        }
        return null
    }

}