import ContentItemMenuItem from '../ContentItemMenuItem.js'
import EditScriptFormMenuItem from './EditScriptFormMenuItem.js'

export default class EditScriptMenuItem extends ContentItemMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Content} data
     */
    constructor(parent, data) {
        super(parent, data)
        this.items = [
            new EditScriptFormMenuItem(this)
        ]
    }

}