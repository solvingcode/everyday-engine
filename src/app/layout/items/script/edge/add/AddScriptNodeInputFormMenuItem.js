import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'
import World from '../../../../../world/World.js'
import DynamicAttributeHelper from '../../../../../utils/DynamicAttributeHelper.js'
import UnitSelector from '../../../../../selector/UnitSelector.js'
import StateManager from '../../../../../state/StateManager.js'
import AddNodeInputAction from '../../../../../runner/action/script/AddNodeInputAction.js'

export default class AddScriptNodeInputFormMenuItem extends FormMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeInputForm} formData
     */
    constructor(parent, formData) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
        this.data = {formData}
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
    postUpdate(value) {
        const stateManager = StateManager.get()
        stateManager.startState(AddNodeInputAction.STATE, 1, this.data)
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formData
    }

}