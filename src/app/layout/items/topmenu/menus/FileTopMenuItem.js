import NewProjectMenuItem from '../../project/NewProjectMenuItem.js'
import LoadProjectMenuItem from '../../project/LoadProjectMenuItem.js'
import SaveProjectMenuItem from '../../project/SaveProjectMenuItem.js'
import ExportProjectMenuItem from '../../project/ExportProjectMenuItem.js'
import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'

export default class FileTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new NewProjectMenuItem(),
            new LoadProjectMenuItem(),
            new SaveProjectMenuItem(),
            new ExportProjectMenuItem(),
            ], position, size
        )
    }
}