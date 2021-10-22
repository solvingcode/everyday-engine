import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationPlayMenuItem from './EditAnimationPlayMenuItem.js'
import EditAnimationDeleteFrameMenuItem from './EditAnimationDeleteFrameMenuItem.js'
import EditAnimationStopMenuItem from './EditAnimationStopMenuItem.js'
import EditAnimationStartRecordMenuItem from './EditAnimationStartRecordMenuItem.js'
import EditAnimationStopRecordMenuItem from './EditAnimationStopRecordMenuItem.js'

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
            new EditAnimationStartRecordMenuItem(this, animation),
            new EditAnimationStopRecordMenuItem(this, animation),
            new EditAnimationPlayMenuItem(this, animation),
            new EditAnimationStopMenuItem(this, animation),
            new EditAnimationDeleteFrameMenuItem(this, animation)
        ]
    }
}