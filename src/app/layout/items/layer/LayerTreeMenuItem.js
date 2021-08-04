import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import LayerListMenuItem from './LayerListMenuItem.js'
import UnitsWrapperMenuItem from '../unit/UnitsWrapperMenuItem.js'

export default class LayerTreeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'tree',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new LayerListMenuItem(this),
            new UnitsWrapperMenuItem(this)
        ]
    }
}