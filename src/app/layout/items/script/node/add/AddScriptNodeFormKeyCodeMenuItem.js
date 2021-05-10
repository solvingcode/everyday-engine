import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'
import {KeyCode} from '../../../../../core/Keyboard.js'

export default class AddScriptNodeFormKeyCodeMenuItem extends FormMenuItem {
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
        const keys = Object.keys(KeyCode)
            .map(key => ({
                value: key,
                label: key
            }))
        return [
            {
                bind: 'value',
                label: 'Keys',
                type: Layout.form.DROPDOWN,
                list: keys
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
        return super.isValid() && this.getFormObject().getType() === NODE_TYPES.KEY_CODE
    }
}