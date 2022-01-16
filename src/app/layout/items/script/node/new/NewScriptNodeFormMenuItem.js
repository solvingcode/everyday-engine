import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'

export default class NewScriptNodeFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {NewScriptNodeForm} form
     */
    constructor(parent, form) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
        this.data = {form}
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'value',
                label: '',
                type: Layout.form.TEXT_INSTANT,
                options: {
                    fullwidth: true,
                    autofocus: true
                },
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.form
    }
}