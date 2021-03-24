import PanelMenuItem from '../panel/PanelMenuItem.js'
import Layout from '../../Layout.js'
import UnitsWrapperMenuItem from './UnitsWrapperMenuItem.js'

export default class UnitMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Layer',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new UnitsWrapperMenuItem(this)
        ]
    }
}