import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'
import World from '../../../../../world/World.js'

export default class AddScriptNodeFormFunctionMenuItem extends FormMenuItem {
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
        let functions = []
        const type = this.getFormObject() && this.getFormObject().getType()
        const functionRegistry = World.get().getFunctionRegistry()
        if (type === NODE_TYPES.CONSTANT) {
            functions = functionRegistry.getConstantInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.EVENT) {
            functions = functionRegistry.getEventInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.CONDITION) {
            functions = functionRegistry.getConditionInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.FUNCTION) {
            functions = functionRegistry.getOtherInstances().filter(instance => instance.isGlobal())
        }
        return [
            {
                bind: 'value',
                label: 'Value',
                type: Layout.form.DROPDOWN,
                list: functions.map(func => (
                    {
                        value: func.getName(),
                        label: func.getName()
                    }
                ))
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addNodeForm
    }

    /**
     * @override
     */
    isValid() {
        const type = this.getFormObject().getType()
        return super.isValid() && type && this.getFormObject().getType() !== NODE_TYPES.CONSTANT
    }
}