import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationPlayMenuItem from './EditAnimationPlayMenuItem.js'

export default class EditAnimationActionsMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: '',
            zone: parent.zone
        })
        this.items = [
            new EditAnimationPlayMenuItem(this)
        ]
    }
}