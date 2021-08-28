import Layout from '../../Layout.js'
import UIElementMenuItem from './UIElementMenuItem.js'

export default class UIEmptyMenuItem extends UIElementMenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Empty',
            stateCode: 'ACTION_ADD_UI_EMPTY',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}