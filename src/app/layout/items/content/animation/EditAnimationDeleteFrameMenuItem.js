import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationDeleteFrameMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'trash',
            title: 'Delete key frame',
            stateCode: 'CONFIRM_ACTION_DELETE_ANIMATION_FRAME',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {animation}
    }

    /**
     * @override
     */
    isValid() {
        const {animation} = this.data
        return super.isValid() && animation && animation.getSelectedFrame()
    }
}
