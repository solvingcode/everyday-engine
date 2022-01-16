import ContentPopupButtonMenuItem from '../ContentPopupButtonMenuItem.js'
import NewScriptNodeMenuItem from '../../script/node/new/NewScriptNodeMenuItem.js'

export default class AddScriptNodePopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor() {
        super('Add Node', NewScriptNodeMenuItem)
    }
}
