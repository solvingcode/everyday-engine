import AddScriptNodeMenuItem from '../../script/node/add/AddScriptNodeMenuItem.js'
import ContentPopupButtonMenuItem from '../ContentPopupButtonMenuItem.js'

export default class AddScriptNodePopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor() {
        super('Add Node', AddScriptNodeMenuItem)
    }
}
