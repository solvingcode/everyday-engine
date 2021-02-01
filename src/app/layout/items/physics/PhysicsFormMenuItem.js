import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'
import Physics from '../../../physics/Physics.js'

/**
 * @class {PhysicsFormMenuItem}
 */
export default class PhysicsFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.init()
    }

    /**
     * @override
     */
    getFields() {
        return [
            {
                bind: 'type',
                label: 'Type',
                type: Layout.form.DROPDOWN,
                list: [
                    {
                        value: Physics.TYPES.MATTERJS,
                        label: 'MatterJS'
                    }
                ]
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getPhysics()
    }
}