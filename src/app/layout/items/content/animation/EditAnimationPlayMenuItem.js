import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

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
}
