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
        const world = World.get()
        const type = this.getFormObject() && this.getFormObject().getType()
        const script = world.getScriptManager().getSelected(World.get().getTabManager())
        const functionRegistry = world.getFunctionRegistry()
        if (type === NODE_TYPES.CONSTANT) {
            functions = functionRegistry.getConstantInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.EVENT) {
            functions = functionRegistry.getEventInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.CONDITION) {
            functions = functionRegistry.getConditionInstances().filter(instance => instance.isGlobal())
        } else if (type === NODE_TYPES.FUNCTION) {
            functions = functionRegistry.getCustomFunctionInstances(script)
        }
        functions = functions.sort((first, second) =>
            first.getName() < second.getName() ? -1 : 1
        )
        return [
            {
                bind: 'value',
                label: 'Function',
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
        return super.isValid() && type &&
            [NODE_TYPES.FUNCTION, NODE_TYPES.EVENT, NODE_TYPES.CONDITION].includes(this.getFormObject().getType())
    }
}