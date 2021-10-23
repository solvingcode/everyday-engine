import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationPropertyFrameButtonMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {KeyFrame} frame
     */
    constructor(parent, animation, frame) {
        super({
            name: 'square-full',
            title: 'Frame',
            stateCode: 'ACTION_SELECT_ANIMATION_KEYFRAME',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {animation, frame}
    }

    /**
     * @override
     */
    isSelected() {
        return this.data.frame.getSelected()
    }
}
