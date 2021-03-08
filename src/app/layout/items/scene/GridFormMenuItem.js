import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'

/**
 * @class {GridFormMenuItem}
 */
export default class GridFormMenuItem extends FormMenuItem {
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
                bind: 'showGrid',
                label: 'Show Grid',
                type: Layout.form.CHECKBOX
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
