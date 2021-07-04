import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'

export default class AddScriptNodeInputFormMenuItem extends FormMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeInputForm} form
     */
    constructor(parent, form) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {form}
    }

    /**
     * @override
     */
    generateFields() {
        const form = this.getFormObject()
        if (form) {
            return [
                {
                    bind: 'value',
                    label: form.getAttribute().getAttrName(),
                    type: Layout.form.TEXT
                }
            ]
        }
        return []
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.form
    }

}