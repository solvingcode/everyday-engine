import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import SceneListMenuItem from './SceneListMenuItem.js'
import SceneFormMenuItem from './SceneFormMenuItem.js'

export default class SceneMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Scenes',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new SceneListMenuItem(this),
            new SceneFormMenuItem(this)
        ]
    }
}