import Action from '../Action.js'
import Project from '../../../project/Project.js'
import Storage from '../../../core/Storage.js'

export default class PasteUnitAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        Project.get().loadClipboard(Storage.type.UNITS)
        return true
    }

}