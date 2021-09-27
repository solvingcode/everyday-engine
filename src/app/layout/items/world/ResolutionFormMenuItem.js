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
                bind: 'resolution',
                label: 'Resolution',
                type: Layout.form.GROUP,
                items: [
                    {
                        bind: 'resolution.width',
                        label: 'Width',
                        type: Layout.form.NUMBER,
                        size: 0.5
                    },
                    {
                        bind: 'resolution.height',
                        label: 'Height',
                        type: Layout.form.NUMBER,
                        size: 0.5
                    }
                ]
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