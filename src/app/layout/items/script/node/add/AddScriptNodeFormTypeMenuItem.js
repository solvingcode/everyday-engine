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
                        value: NODE_TYPES.SELF,
                        label: 'Self'
                    },
                    {
                        value: NODE_TYPES.EVENT,
                        label: 'Event'
                    },
                    {
                        value: NODE_TYPES.ANIMATION,
                        label: 'Animation'
                    },
                    {
                        value: NODE_TYPES.COMPONENT,
                        label: 'Component'
                    },
                    {
                        value: NODE_TYPES.FUNCTION,
                        label: 'Function'
                    },
                    {
                        value: NODE_TYPES.LOOP,
                        label: 'Loop'
                    },
                    {
                        value: NODE_TYPES.CONDITION,
                        label: 'Condition'
                    },
                    {
                        value: NODE_TYPES.KEY_CODE,
                        label: 'Key Code'
                    },
                    {
                        value: NODE_TYPES.VAR_NUMBER,
                        label: 'Variable (Number)'
                    },
                    {
                        value: NODE_TYPES.VAR_STRING,
                        label: 'Variable (string)'
                    },
                    {
                        value: NODE_TYPES.VAR_BOOLEAN,
                        label: 'Variable (boolean)'
                    },
                    {
                        value: NODE_TYPES.VAR_TOGGLE,
                        label: 'Variable (toggle)'
                    },
                    {
                        value: NODE_TYPES.VAR_COMPONENT,
                        label: 'Variable (component)'
                    },
                    {
                        value: NODE_TYPES.VAR_MASK_GROUP,
                        label: 'Variable (Mask Group)'
                    },
                    {
                        value: NODE_TYPES.REFERENCE,
                        label: 'Reference'
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