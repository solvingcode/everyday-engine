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
        ]
    }
}

export default TextureMenuItem