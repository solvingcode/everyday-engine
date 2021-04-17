import Layout from '../../../Layout.js'
import FormMenuItem from '../../form/FormMenuItem.js'

export default class EditScriptFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'dataUrl',
                label: '',
                type: Layout.form.TEXTAREA
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        const asset = this.getAssetScript()
        const script = asset.getType().parse()
        script.reset()
    }

    /**
     * @override
     */
    getFormObject() {
        return this.getAssetScript().getType()
    }

    /**
     * @return {Asset}
     */
    getAssetScript(){
        return this.parent.data.getData()
    }
}