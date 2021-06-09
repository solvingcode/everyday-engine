import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationPlayMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'play',
            title: 'Play',
            stateCode: 'ACTION_PLAY_ANIMATION',
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
        const tabManager = world.getTabManager()
        const animation = world.getAnimationManager().getSelected(tabManager)
        return super.isValid() && animation && !animation.isPlaying()
    }
}
