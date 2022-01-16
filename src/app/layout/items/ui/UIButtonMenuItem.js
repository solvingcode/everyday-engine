import Layout from '../../Layout.js'
import UIElementMenuItem from './UIElementMenuItem.js'

export default class UIButtonMenuItem extends UIElementMenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Button',
            stateCode: 'ACTION_ADD_UI_BUTTON',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}