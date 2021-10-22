import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationTimelineListMenuItem from './EditAnimationTimelineListMenuItem.js'

export default class EditAnimationTimelineWrapperMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'animation-timeline-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        }, parent)
        this.items = [
            new EditAnimationTimelineListMenuItem(this, animation)
        ]
    }

}