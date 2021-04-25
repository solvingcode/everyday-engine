import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class AddScriptNodeSubmitMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ADD_SCRIPT_NODE',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }
}
