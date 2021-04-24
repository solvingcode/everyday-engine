import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import {NODE_TYPES} from '../../../../flow/node/ANode.js'

export default class AddScriptNodeFormMenuItem extends FormMenuItem {
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
        const list = [
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
                    }
                ]
            }
        ]

        if (this.getFormObject()) {
            const type = this.getFormObject().getType()
            if (type === NODE_TYPES.CONSTANT) {
                list.push({
                    bind: 'value',
                    label: 'Value',
                    type: Layout.form.TEXT
                })
            } else if (type){
                list.push({
                    bind: 'value',
                    label: 'Value',
                    type: Layout.form.DROPDOWN,
                    list: []
                })
            }
        }

        return list
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addNodeForm
    }
}

export class AddScriptNodeForm {

    /**
     * @type {string}
     */
    type

    /**
     * @type {string}
     */
    value

    constructor() {
        this.type = ''
        this.value = ''
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type
    }

    /**
     * @return {string}
     */
    getType() {
        return this.type
    }

    /**
     * @param {string} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value
    }

}