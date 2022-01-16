import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationStopMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AnimationComponent} animationComponent
     */
    constructor(parent, animationComponent) {
        super({
            name: 'stop',
            title: 'Stop',
            stateCode: 'ACTION_STOP_ANIMATION',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {animationComponent}
    }

    /**
     * @override
     */
    isValid() {
        const {animationComponent} = this.data
        return super.isValid() && animationComponent && animationComponent.getPlaying()
    }
}
