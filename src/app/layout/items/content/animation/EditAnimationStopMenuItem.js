import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationStopMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'stop',
            title: 'Stop',
            stateCode: 'ACTION_STOP_ANIMATION',
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
        return super.isValid() && animation && animation.isPlaying()
    }
}
