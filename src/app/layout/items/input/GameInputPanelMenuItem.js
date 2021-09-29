import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import GameInputListMenuItem from './list/GameInputListMenuItem.js'
import AddGameInputPopupButtonMenuItem from './add/AddGameInputPopupButtonMenuItem.js'

export default class GameInputPanelMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'game-inputs',
            title: 'Game Inputs',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new AddGameInputPopupButtonMenuItem(this),
            new GameInputListMenuItem(this)
        ]
        this.collapsed = true
    }

    /**
     * @override
     */
    isSection() {
        return true
    }
}