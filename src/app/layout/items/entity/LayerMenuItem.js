import PanelMenuItem from '../panel/PanelMenuItem.js'
import Layout from '../../Layout.js'
import ListEntityMenuItem from './ListEntityMenuItem.js'

export default class LayerMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Layer',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new ListEntityMenuItem(this)
        ]
    }
}