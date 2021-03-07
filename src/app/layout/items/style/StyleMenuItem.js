import TextureFormMenuItem from './TextureFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * Style Menu Item
 * Menu responsible for managing entity's styles
 */
class StyleMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Style',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new TextureFormMenuItem(this)
        ]
    }
}

export default StyleMenuItem