import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../manager/UnitSelector.js'

export default class UnitFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
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
        return UnitSelector.get().getFirstSelected(World.get())
    }
}