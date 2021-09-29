import Layout from '../../Layout.js'
import MaskPanelMenuItem from './MaskPanelMenuItem.js'
import MenuItem from '../../MenuItem.js'

export default class MaskMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'mask-wrapper',
            stateCode: '',
            zone: Layout.zone.RIGHT,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new MaskPanelMenuItem()
        ]
    }
}