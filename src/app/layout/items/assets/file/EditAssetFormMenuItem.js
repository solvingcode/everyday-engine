import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import FormMenuItem from '../../form/FormMenuItem.js'

export default class EditAssetFormMenuItem extends FormMenuItem {
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
                label: 'Asset',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     * @return {Asset}
     */
    getFormObject() {
        return World.get().getAssetsManager().getSelectedAsset()
    }

}