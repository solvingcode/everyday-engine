import Layout from '../../Layout.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'

/**
 * Form physics properties
 */
class PropsFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return EntitySelector.get().getFirstSelected(World.get())
    }
}

export default PropsFormMenuItem