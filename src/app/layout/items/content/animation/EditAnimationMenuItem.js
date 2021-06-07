import ContentItemMenuItem from '../ContentItemMenuItem.js'
import EditAnimationWrapperMenuItem from './EditAnimationWrapperMenuItem.js'

export default class EditAnimationMenuItem extends ContentItemMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Content} data
     */
    constructor(parent, data) {
        super(parent, data)
        this.items = [
            new EditAnimationWrapperMenuItem(this)
        ]
    }

}