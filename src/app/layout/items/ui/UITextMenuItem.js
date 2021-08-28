import Layout from '../../Layout.js'
import UIElementMenuItem from './UIElementMenuItem.js'

export default class UITextMenuItem extends UIElementMenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Text',
            stateCode: 'ACTION_ADD_UI_TEXT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}