import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'

export default class AddScriptNodeFormVariableMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeForm} addNodeForm
     */
    constructor(parent, addNodeForm) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {addNodeForm}
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'value',
                label: 'Name',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addNodeForm
    }

    isValid() {
        const type = this.getFormObject().getType()
        return super.isValid()
            && (type === NODE_TYPES.VAR_STRING ||
                type === NODE_TYPES.VAR_NUMBER ||
                type === NODE_TYPES.VAR_BOOLEAN ||
                type === NODE_TYPES.VAR_TOGGLE ||
                type === NODE_TYPES.VAR_COMPONENT ||
                type === NODE_TYPES.VAR_UNIT ||
                type === NODE_TYPES.VAR_AUDIO ||
                type === NODE_TYPES.VAR_IMAGE ||
                type === NODE_TYPES.VAR_UNIT_INSTANT ||
                type === NODE_TYPES.VAR_SCENE ||
                type === NODE_TYPES.VAR_MASK_GROUP)
    }
}