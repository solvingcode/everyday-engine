import FormMenuItem from '../form/FormMenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class ComponentAddFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddComponentForm} formData
     */
    constructor(parent, formData) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }

    /**
     * @override
     */
    generateFields() {
        const components = World.get().getComponentRegistry().getInstances()
        const componentList = components.map(component => ({
            value: component.getName(),
            label: component.getName()
        }))
        return [
            {
                bind: 'name',
                label: 'Component',
                type: Layout.form.DROPDOWN,
                list: componentList
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formData
    }

}