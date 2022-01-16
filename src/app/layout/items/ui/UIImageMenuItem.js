import Layout from '../../Layout.js'
import UIElementMenuItem from './UIElementMenuItem.js'

export default class UIImageMenuItem extends UIElementMenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Image',
            stateCode: 'ACTION_ADD_UI_IMAGE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}