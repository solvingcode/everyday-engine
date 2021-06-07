import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddAnimationMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'photo-video',
            title: 'Add animation',
            stateCode: 'ACTION_ADD_ANIMATION',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}