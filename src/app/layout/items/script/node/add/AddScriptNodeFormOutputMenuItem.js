import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'
import {TYPES_NAME} from '../../../../../pobject/AttributeType.js'

export default class AddScriptNodeFormOutputMenuItem extends FormMenuItem {
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
                label: 'Output type',
                type: Layout.form.DROPDOWN,
                list: TYPES_NAME
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
        return super.isValid() && this.getFormObject().getType() === NODE_TYPES.OUTPUT
    }
}