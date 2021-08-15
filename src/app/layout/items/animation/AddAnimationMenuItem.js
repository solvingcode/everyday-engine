import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddAnimationMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Animation',
            stateCode: 'ACTION_ADD_ANIMATION',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}