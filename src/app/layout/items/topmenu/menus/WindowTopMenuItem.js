import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import AddWindowMenuItem from '../../window/AddWindowMenuItem.js'
import {WINDOWS} from '../../../../manager/WindowManager.js'

export default class WindowTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new AddWindowMenuItem('Animation', WINDOWS.ANIMATION),
            ], position, size
        )
    }
}