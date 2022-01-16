import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import AddGameInputMenuItem from './AddGameInputMenuItem.js'

export default class AddGameInputPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor(parent) {
        super('Add new input', AddGameInputMenuItem, parent)
    }
}
