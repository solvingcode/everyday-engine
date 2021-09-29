import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import EditGameInputMenuItem from './EditGameInputMenuItem.js'

export default class EditGameInputPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(bindObject) {
        super('Edit', EditGameInputMenuItem, null, bindObject)
    }
}
