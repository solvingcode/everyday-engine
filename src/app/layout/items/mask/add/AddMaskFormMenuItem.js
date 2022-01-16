import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'

export default class AddMaskFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddMaskForm} formData
     */
    constructor(parent, formData) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formData
    }
}