import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import RefreshProjectMenuItem from '../../project/RefreshProjectMenuItem.js'

export default class ProjectTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new RefreshProjectMenuItem(),
            ], position, size
        )
    }
}