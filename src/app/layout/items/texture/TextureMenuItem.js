import AddTextureFormMenuItem from './AddTextureFormMenuItem.js'
import UpdateTextureFormMenuItem from './UpdateTextureFormMenuItem.js'
import ListTextureFormMenuItem from './ListTextureFormMenuItem.js'
import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {TextureMenuItem}
 * Menu responsible for managing textures
 */
class TextureMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Textures',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new AddTextureFormMenuItem(this),
            new ListTextureFormMenuItem(this),
            new UpdateTextureFormMenuItem(this)
        ]
    }
}

export default TextureMenuItem