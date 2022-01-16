import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import EditMaskMenuItem from './EditMaskMenuItem.js'

export default class EditMaskPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(bindObject) {
        super('Edit', EditMaskMenuItem, null, bindObject)
    }
}
