import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'

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
        const listMaskGroup = World.get()
            .getPreference().getMaskGroup().getMasks()
            .map(maskGroup => ({
                value: maskGroup.getId(),
                label: maskGroup.getName()
            }))
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            },
            {
                bind: 'maskGroupId',
                label: 'Mask Group',
                type: Layout.form.DROPDOWN,
                list: listMaskGroup
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