import OptionActionsMenuItem from '../option/OptionActionsMenuItem.js'
import HideItemMenuItem from '../action/HideItemMenuItem.js'
import ShowItemMenuItem from '../action/ShowItemMenuItem.js'

export default class LayerActionsMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
                new HideItemMenuItem(bindObject),
                new ShowItemMenuItem(bindObject),
            ], position, size
        )
    }
}