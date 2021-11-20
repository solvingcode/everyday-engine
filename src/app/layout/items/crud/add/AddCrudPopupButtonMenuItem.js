import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import AddCrudMenuItem from './AddCrudMenuItem.js'

export default class AddCrudPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} formData
     */
    constructor(parent, formData) {
        super('Add new', AddCrudMenuItem, parent, formData)
    }
}
