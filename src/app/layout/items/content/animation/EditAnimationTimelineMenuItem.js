import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationFormWrapperMenuItem from './EditAnimationFormWrapperMenuItem.js'
import EditAnimationTimelineListMenuItem from './EditAnimationTimelineListMenuItem.js'

export default class EditAnimationTimelineMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'Animation',
            zone: parent.zone
        })
        this.items = [
            new EditAnimationFormWrapperMenuItem(this, animation),
            new EditAnimationTimelineListMenuItem(this, animation)
        ]
    }
}