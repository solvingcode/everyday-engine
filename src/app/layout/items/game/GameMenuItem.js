import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import MaskMenuItem from '../mask/MaskMenuItem.js'
import GameInputMenuItem from '../input/GameInputMenuItem.js'

export default class GameMenuItem extends PanelMenuItem {

    constructor() {
        super({
            name: 'game',
            title: 'Game Preference',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new MaskMenuItem(this),
            new GameInputMenuItem(this)
        ]
    }

}