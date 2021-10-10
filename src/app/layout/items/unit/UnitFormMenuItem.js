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
            name: 'Properties',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
    }

    /**
     * @override
     */
    generateFields() {
        const preference = World.get().getPreference()
        const listMaskGroup = preference.getMaskGroup().getMasks()
            .map(maskGroup => ({
                value: maskGroup.getId(),
                label: maskGroup.getName()
            }))
        const listTag = preference.getTag().getTags()
            .map(tag => ({
                value: tag.getId(),
                label: tag.getName()
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
            },
            {
                bind: 'tagId',
                label: 'Tag',
                type: Layout.form.DROPDOWN,
                list: listTag
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