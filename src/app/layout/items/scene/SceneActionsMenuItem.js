import OptionActionsMenuItem from '../option/OptionActionsMenuItem.js'
import SceneLoadMenuItem from './SceneLoadMenuItem.js'
import SceneUnLoadMenuItem from './SceneUnLoadMenuItem.js'

export default class SceneActionsMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
                new SceneLoadMenuItem(bindObject),
                new SceneUnLoadMenuItem(bindObject)
            ], position, size
        )
    }
}