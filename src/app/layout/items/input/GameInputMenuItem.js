import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import GameInputPanelMenuItem from './GameInputPanelMenuItem.js'

export default class GameInputMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'default-form-wrapper',
            stateCode: '',
            zone: Layout.zone.RIGHT,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new GameInputPanelMenuItem()
        ]
    }
}