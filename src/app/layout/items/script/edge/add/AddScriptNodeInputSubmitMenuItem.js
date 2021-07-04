import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class AddScriptNodeInputSubmitMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeInputForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            stateCode: 'ACTION_ADD_SCRIPT_NODE_INPUT',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.data = {formData}
        this.parent = parent
    }
}
