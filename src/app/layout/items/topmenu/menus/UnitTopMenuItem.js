import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import CameraMenuItem from '../../edit/CameraMenuItem.js'
import LightPointMenuItem from '../../edit/LightPointMenuItem.js'
import LightGlobalMenuItem from '../../edit/LightGlobalMenuItem.js'
import AddAnimationMenuItem from '../../animation/AddAnimationMenuItem.js'
import OptionActionsButtonMenuItem from '../../option/OptionActionsButtonMenuItem.js'
import UITopMenuItem from './UITopMenuItem.js'
import AlignViewMenuItem from '../../edit/AlignViewMenuItem.js'
import VisibilityTopMenuItem from './VisibilityTopMenuItem.js'
import AddSceneMenuItem from '../../scene/AddSceneMenuItem.js'

export default class UnitTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new AddSceneMenuItem(),
            new CameraMenuItem(),
            new LightPointMenuItem(),
            new LightGlobalMenuItem(),
            new AddAnimationMenuItem(),
            new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true),
            new OptionActionsButtonMenuItem('Visibility', VisibilityTopMenuItem, null, true),
            new AlignViewMenuItem()
            ], position, size
        )
    }
}