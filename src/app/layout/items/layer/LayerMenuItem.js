import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import LayerTreeMenuItem from './LayerTreeMenuItem.js'

export default class LayerMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'layer',
            title: 'Layer',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new LayerTreeMenuItem(this)
        ]
    }
}