import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import AddTagMenuItem from './AddTagMenuItem.js'

export default class AddTagPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(parent) {
        super('Add new tag', AddTagMenuItem, parent)
    }
}
