import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import AddMaskMenuItem from './AddMaskMenuItem.js'

export default class AddMaskPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(parent) {
        super('Add new mask', AddMaskMenuItem, parent)
    }
}
