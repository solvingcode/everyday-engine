import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import UIContainerMenuItem from '../../ui/UIContainerMenuItem.js'
import UIImageMenuItem from '../../ui/UIImageMenuItem.js'

export default class UITopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new UIContainerMenuItem(),
            new UIImageMenuItem()
            ], position, size
        )
    }
}