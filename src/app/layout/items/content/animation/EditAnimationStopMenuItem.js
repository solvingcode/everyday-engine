import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationStopMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'stop',
            title: 'Stop',
            stateCode: 'ACTION_STOP_ANIMATION',
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
        return super.isValid() && animation.isPlaying()
    }
}
