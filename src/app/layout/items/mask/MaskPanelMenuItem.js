import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import MaskListMenuItem from './list/MaskListMenuItem.js'
import AddMaskPopupButtonMenuItem from './add/AddMaskPopupButtonMenuItem.js'

export default class MaskPanelMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'mask',
            title: 'Mask Group',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new AddMaskPopupButtonMenuItem(this),
            new MaskListMenuItem(this)
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