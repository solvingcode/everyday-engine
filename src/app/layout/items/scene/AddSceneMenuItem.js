import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AddSceneMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Scene',
            stateCode: 'ACTION_ADD_SCENE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}