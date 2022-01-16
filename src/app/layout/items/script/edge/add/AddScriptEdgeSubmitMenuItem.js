import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class AddScriptEdgeSubmitMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptEdgeForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ADD_SCRIPT_EDGE',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.data = {formData}
        this.parent = parent
    }
}
