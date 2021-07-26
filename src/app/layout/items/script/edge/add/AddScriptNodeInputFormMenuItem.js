import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'
import World from '../../../../../world/World.js'
import DynamicAttributeHelper from '../../../../../utils/DynamicAttributeHelper.js'
import UnitSelector from '../../../../../selector/UnitSelector.js'

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
            return [...DynamicAttributeHelper.getFormFields(
                World.get(), UnitSelector.get(), form.getAttribute(), false, 'value')]
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