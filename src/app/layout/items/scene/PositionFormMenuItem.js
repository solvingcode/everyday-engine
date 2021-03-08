import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'

/**
 * Form properties
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
        return World.get().getCamera()
    }
}

export default PositionFormMenuItem