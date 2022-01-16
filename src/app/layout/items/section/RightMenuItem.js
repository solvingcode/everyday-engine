import Layout from '../../Layout.js'
import LayerMenuItem from '../layer/LayerMenuItem.js'
import SceneMenuItem from '../scene/SceneMenuItem.js'
import WorldMenuItem from '../world/WorldMenuItem.js'
import MainCameraMenuItem from '../world/MainCameraMenuItem.js'
import ScriptMenuItem from '../script/ScriptMenuItem.js'
import GameMenuItem from '../game/GameMenuItem.js'
import MenuItem from '../../MenuItem.js'

export default class RightMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'section-right',
            title: '',
            stateCode: '',
            zone: Layout.zone.RIGHT,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new LayerMenuItem(),
            new SceneMenuItem(),
            new WorldMenuItem(),
            new MainCameraMenuItem(),
            new ScriptMenuItem(),
            new GameMenuItem(),
        ]
    }
}