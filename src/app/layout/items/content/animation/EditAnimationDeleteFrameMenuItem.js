import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import World from '../../../../world/World.js'
import UnitHelper from '../../../../utils/UnitHelper.js'

export default class EditAnimationDeleteFrameMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     */
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
        const unit = UnitSelector.get().getFirstSelected(world)
        const animation = UnitHelper.getAnimation(world, unit)
        return super.isValid() && animation && animation.getSelectedFrames().length
    }
}
