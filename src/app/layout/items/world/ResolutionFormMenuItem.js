import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'

/**
 * @class {ResolutionFormMenuItem}
 */
export default class ResolutionFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: 'Resolution',
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
                bind: 'resolution.width',
                label: 'Width',
                type: Layout.form.TEXT
            },
            {
                bind: 'resolution.height',
                label: 'Height',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get()
    }
}