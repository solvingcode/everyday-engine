import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import LockMenuItem from '../../action/LockMenuItem.js'
import UnlockMenuItem from '../../action/UnlockMenuItem.js'
import HideMenuItem from '../../action/HideMenuItem.js'
import ShowMenuItem from '../../action/ShowMenuItem.js'
import FocusMenuItem from '../../action/FocusMenuItem.js'
import UnfocusMenuItem from '../../action/UnfocusMenuItem.js'

export default class VisibilityTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new LockMenuItem(),
            new UnlockMenuItem(),
            new HideMenuItem(),
            new ShowMenuItem(),
            new FocusMenuItem(),
            new UnfocusMenuItem()
            ], position, size
        )
    }
}