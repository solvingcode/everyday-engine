import Layout from '../../Layout.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'

/**
 * Entity's position properties
 */
class PositionFormMenuItem extends FormMenuItem {
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
                bind: 'positionX',
                label: 'X',
                type: Layout.form.TEXT
            },
            {
                bind: 'positionY',
                label: 'Y',
                type: Layout.form.TEXT
            },
            {
                bind: 'positionZ',
                label: 'Z',
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

export default PositionFormMenuItem