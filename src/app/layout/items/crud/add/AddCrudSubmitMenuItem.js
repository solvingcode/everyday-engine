import ButtonSubmitMenuItem from '../../form/ButtonSubmitMenuItem.js'
import Layout from '../../../Layout.js'

export default class AddCrudSubmitMenuItem extends ButtonSubmitMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} formData
     */
    constructor(parent, formData) {
        super({
            name: 'check',
            title: 'Confirm',
            stateCode: 'ACTION_ADD_CRUD',
            postStateCode: 'ACTION_CLOSE_CONTENT_POPUP',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }
}
