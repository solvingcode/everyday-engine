import Action from '../Action.js'
import Project from '../../../project/Project.js'
import Storage from '../../../core/Storage.js'

export default class CopyUnitAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedUnits) {
        Project.get().saveClipboard(Storage.type.UNITS, selectedUnits)
        return true
    }

}