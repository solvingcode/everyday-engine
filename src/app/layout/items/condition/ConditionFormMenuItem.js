import Layout from '../../Layout.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'

/**
 * Form properties
 */
class ConditionFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: 'Conditions',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getFields() {
        const bodyEntities = World.get().getEntityManager().getBodyEntities()
            .filter(entity => entity !== this.object)
            .map(entity => ({value: entity.id, label: entity.name}))

        return [
            {
                bind: 'dieCondition',
                label: 'Die when collide',
                type: Layout.form.DROPDOWN,
                list: bodyEntities
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

export default ConditionFormMenuItem