import ContentPopupButtonMenuItem from '../../popup/ContentPopupButtonMenuItem.js'
import EditAnimationAddPropertyMenuItem from './EditAnimationAddPropertyMenuItem.js'

export default class EditAnimationAddPropertyButtonMenuItem extends ContentPopupButtonMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super('Add Property', EditAnimationAddPropertyMenuItem, parent, animation)
    }
}
