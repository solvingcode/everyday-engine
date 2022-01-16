import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationTimelineListMenuItem from './EditAnimationTimelineListMenuItem.js'

export default class EditAnimationTimelineWrapperMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {AnimationComponent} animationComponent
     */
    constructor(parent, animation, animationComponent) {
        super({
            name: 'animation-timeline-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        }, parent)
        this.data = {animation, animationComponent}
        this.items = [
            new EditAnimationTimelineListMenuItem(this, animation, animationComponent)
        ]
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !!this.data.animationComponent && !this.data.animationComponent.getPlaying()
    }

}