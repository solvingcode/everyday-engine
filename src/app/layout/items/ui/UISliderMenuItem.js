import Layout from '../../Layout.js'
import UIElementMenuItem from './UIElementMenuItem.js'

export default class UISliderMenuItem extends UIElementMenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Slider',
            stateCode: 'ACTION_ADD_UI_SLIDER',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}