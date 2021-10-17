import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationDeleteFrameMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'trash',
            title: 'Delete key frame',
            stateCode: 'CONFIRM_ACTION_DELETE_ANIMATION_FRAME',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const animation = world.getAnimationManager().getEditing()
        const timeline = animation && animation.getSelectedTimeline()
        return super.isValid() && timeline && !!timeline.getFrame()
    }
}
