import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ComponentSubmitFormMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddComponentForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ATTACH_COMPONENT',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }
}
