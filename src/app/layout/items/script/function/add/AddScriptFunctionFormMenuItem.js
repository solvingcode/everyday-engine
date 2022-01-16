import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'

export default class AddScriptFunctionFormMenuItem  extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptFunctionForm} addFunctionForm
     */
    constructor(parent, addFunctionForm) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {addFunctionForm}
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
        return this.data.addFunctionForm
    }
}