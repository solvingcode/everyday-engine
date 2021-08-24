import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import UIContainerMenuItem from '../../ui/UIContainerMenuItem.js'
import UIImageMenuItem from '../../ui/UIImageMenuItem.js'
import UITextMenuItem from '../../ui/UITextMenuItem.js'
import UIButtonMenuItem from '../../ui/UIButtonMenuItem.js'

export default class UITopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new UIContainerMenuItem(),
            new UIImageMenuItem(),
            new UITextMenuItem(),
            new UIButtonMenuItem()
            ], position, size
        )
    }
}