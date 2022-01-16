import ButtonSubmitMenuItem from '../../form/ButtonSubmitMenuItem.js'
import Layout from '../../../Layout.js'

export default class AddTagSubmitMenuItem extends ButtonSubmitMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddTagForm} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ADD_TAG',
            postStateCode: 'ACTION_CLOSE_CONTENT_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }
}
