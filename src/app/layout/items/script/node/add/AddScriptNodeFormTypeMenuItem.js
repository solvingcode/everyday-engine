import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'

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
                list: [
                    {
                        value: NODE_TYPES.EVENT,
                        label: 'Event'
                    },
                    {
                        value: NODE_TYPES.FUNCTION,
                        label: 'Function'
                    },
                    {
                        value: NODE_TYPES.CONSTANT,
                        label: 'Constant'
                    },
                    {
                        value: NODE_TYPES.CONDITION,
                        label: 'Condition'
                    },
                    {
                        value: NODE_TYPES.UNIT,
                        label: 'Unit'
                    }
                ]
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