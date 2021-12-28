import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationPlayMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AnimationComponent} animationComponent
     */
    constructor(parent, animationComponent) {
        super({
            name: 'play',
            title: 'Play',
            stateCode: 'ACTION_PLAY_ANIMATION',
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
        return super.isValid() && animationComponent && !animationComponent.getPlaying()
    }
}
