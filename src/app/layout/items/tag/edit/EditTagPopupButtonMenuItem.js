import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import EditTagMenuItem from './EditTagMenuItem.js'

export default class EditTagPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(bindObject) {
        super('Edit', EditTagMenuItem, null, bindObject)
    }
}
