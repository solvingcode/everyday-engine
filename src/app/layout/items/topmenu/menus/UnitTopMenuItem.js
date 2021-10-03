import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import CameraMenuItem from '../../unit/CameraMenuItem.js'
import LightPointMenuItem from '../../unit/LightPointMenuItem.js'
import LightGlobalMenuItem from '../../unit/LightGlobalMenuItem.js'
import AddAnimationMenuItem from '../../animation/AddAnimationMenuItem.js'
import OptionActionsButtonMenuItem from '../../option/OptionActionsButtonMenuItem.js'
import UITopMenuItem from './UITopMenuItem.js'
import AlignViewMenuItem from '../../edit/AlignViewMenuItem.js'
import VisibilityTopMenuItem from './VisibilityTopMenuItem.js'
import AddSceneMenuItem from '../../scene/AddSceneMenuItem.js'
import AlignParentMenuItem from '../../edit/AlignParentMenuItem.js'
import CreateUnitInstantMenuItem from '../../unit/CreateUnitInstantMenuItem.js'
import TileGridMenuItem from '../../unit/TileGridMenuItem.js'
import TileMapMenuItem from '../../unit/TileMapMenuItem.js'

export default class UnitTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new AddSceneMenuItem(),
            new CameraMenuItem(),
            new LightPointMenuItem(),
            new LightGlobalMenuItem(),
            new TileGridMenuItem(),
            new TileMapMenuItem(),
            new AddAnimationMenuItem(),
            new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true),
            new OptionActionsButtonMenuItem('Visibility', VisibilityTopMenuItem, null, true),
            new AlignViewMenuItem(),
            new AlignParentMenuItem(),
            new CreateUnitInstantMenuItem()
            ], position, size
        )
    }
}