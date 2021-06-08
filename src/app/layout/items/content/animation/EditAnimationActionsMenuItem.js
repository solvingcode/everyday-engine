import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationPlayMenuItem from './EditAnimationPlayMenuItem.js'
import EditAnimationDeleteFrameMenuItem from './EditAnimationDeleteFrameMenuItem.js'
import EditAnimationStopMenuItem from './EditAnimationStopMenuItem.js'

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
            new EditAnimationPlayMenuItem(this),
            new EditAnimationStopMenuItem(this),
            new EditAnimationDeleteFrameMenuItem(this)
        ]
    }
}