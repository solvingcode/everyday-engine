import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import EditCrudMenuItem from './EditCrudMenuItem.js'

export default class EditCrudPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(bindObject) {
        super('Edit', EditCrudMenuItem, null, bindObject)
    }
}
