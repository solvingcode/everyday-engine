import ContentItemMenuItem from '../../ContentItemMenuItem.js'
import EditScriptCodeFormMenuItem from './EditScriptCodeFormMenuItem.js'
import EditScriptCodeErrorMenuItem from './EditScriptCodeErrorMenuItem.js'

export default class EditScriptCodeMenuItem extends ContentItemMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Content} data
     */
    constructor(parent, data) {
        super(parent, data)
        this.items = [
            new EditScriptCodeFormMenuItem(this),
            new EditScriptCodeErrorMenuItem(this)
        ]
    }

}