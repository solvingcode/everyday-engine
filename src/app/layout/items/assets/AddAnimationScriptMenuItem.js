import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddAnimationScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'project-diagram',
            title: 'Create animation script',
            stateCode: 'ACTION_ADD_ANIMATION_SCRIPT',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}