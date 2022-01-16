import Layout from '../../../../Layout.js'
import ButtonSubmitMenuItem from '../../../form/ButtonSubmitMenuItem.js'

export default class AddScriptNodeSubmitMenuItem extends ButtonSubmitMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ADD_SCRIPT_NODE',
            postStateCode: 'ACTION_CLOSE_CONTENT_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }
}
