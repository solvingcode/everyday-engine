import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationPlayMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'play',
            title: 'Play',
            stateCode: 'ACTION_PLAY_ANIMATION',
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
        return super.isValid() && animation && !animation.isPlaying()
    }
}
