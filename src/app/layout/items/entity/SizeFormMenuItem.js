import Layout from '../../Layout.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'

/**
 * Entity's size properties
 */
class SizeFormMenuItem extends FormMenuItem {
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
                bind: 'width',
                label: 'Width',
                type: Layout.form.TEXT
            },
            {
                bind: 'height',
                label: 'Height',
                type: Layout.form.TEXT
            },
            {
                bind: 'rotationDegree',
                label: 'Rotation (°)',
                type: Layout.form.RANGE,
                options: {
                    min: 0,
                    max: 360
                }
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

export default SizeFormMenuItem