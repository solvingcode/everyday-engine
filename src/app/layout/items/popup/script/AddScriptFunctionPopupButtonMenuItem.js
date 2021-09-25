import ContentPopupButtonMenuItem from '../ContentPopupButtonMenuItem.js'
import AddScriptFunctionMenuItem from '../../script/function/add/AddScriptFunctionMenuItem.js'

export default class AddScriptFunctionPopupButtonMenuItem extends ContentPopupButtonMenuItem {
    constructor() {
        super('Create function', AddScriptFunctionMenuItem)
    }
}
