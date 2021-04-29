import ContentItemMenuItem from '../../ContentItemMenuItem.js'

export default class EditGraphScriptMenuItem extends ContentItemMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Content} data
     */
    constructor(parent, data) {
        super(parent, data)
        this.items = []
    }

}