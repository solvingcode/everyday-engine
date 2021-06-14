import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'
import World from '../../../../../world/World.js'

export default class AddScriptNodeFormComponentMenuItem extends FormMenuItem {
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
        const components = World.get().getComponentRegistry().getInstances()
            .map(component => ({
                value: component.getName(),
                label: component.getName()
            }))
        return [
            {
                bind: 'value',
                label: 'Component',
                type: Layout.form.DROPDOWN,
                list: components
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
        return super.isValid() && this.getFormObject().getType() === NODE_TYPES.COMPONENT
    }
}