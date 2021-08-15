import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import UIContainerMenuItem from '../../ui/UIContainerMenuItem.js'

export default class UITopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new UIContainerMenuItem()
            ], position, size
        )
    }
}