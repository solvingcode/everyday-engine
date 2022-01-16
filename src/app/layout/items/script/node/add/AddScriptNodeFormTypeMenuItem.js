import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPE_NAMES} from '../../../../../flow/node/ANode.js'

export default class AddScriptNodeFormTypeMenuItem extends FormMenuItem {
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
                bind: 'type',
                label: 'Type',
                type: Layout.form.DROPDOWN,
                list: NODE_TYPE_NAMES
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addNodeForm
    }
}