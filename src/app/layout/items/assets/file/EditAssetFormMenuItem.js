import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import FormMenuItem from '../../form/FormMenuItem.js'
import ClientError from '../../../../exception/type/ClientError.js'
import AssetAnimationXml from '../../../../asset/types/animation/AssetAnimationXml.js'
import AssetScript from '../../../../asset/types/script/AssetScript.js'

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
        const folders = World.get().getAssetsManager().getFolders()
        return [
            {
                bind: 'name',
                label: 'Asset',
                type: Layout.form.TEXT
            },
            {
                bind: 'folderId',
                label: 'Move to',
                type: Layout.form.DROPDOWN,
                list: folders.map(folder => ({
                    value: folder.getId(),
                    label: folder.getName()
                }))
            }
        ]
    }

    /**
     * @override
     */
    preUpdate(value) {
        if (!value) {
            throw new ClientError(`Cannot move Asset (target folder is required)`)
        }
        return super.preUpdate(value)
    }

    /**
     * @override
     */
    postUpdate(value) {
        const selectedAsset = this.getPreUpdateData()
        if (selectedAsset) {
            if (selectedAsset.getType() instanceof AssetAnimationXml || selectedAsset.getType() instanceof AssetScript) {
                const oldName = selectedAsset.getName()
                selectedAsset.rename(oldName, value)
            }
        }
        super.postUpdate(value)
    }

    /**
     * @override
     * @return {Asset}
     */
    getFormObject() {
        return World.get().getAssetsManager().getSelectedAsset()
    }

}