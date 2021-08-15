import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import DeleteMenuItem from '../../action/DeleteMenuItem.js'
import DuplicateMenuItem from '../../action/DuplicateMenuItem.js'
import UndoMenuItem from '../../action/UndoMenuItem.js'
import MoveUpMenuItem from '../../action/MoveUpMenuItem.js'
import MoveDownMenuItem from '../../action/MoveDownMenuItem.js'

export default class EditTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new DeleteMenuItem(),
            new DuplicateMenuItem(),
            new UndoMenuItem(),
            new MoveUpMenuItem(),
            new MoveDownMenuItem()
            ], position, size
        )
    }
}