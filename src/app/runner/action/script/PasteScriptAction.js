import Action from '../Action.js'
import Project from '../../../project/Project.js'
import * as StorageConstant from '../../../constant/StorageConstant.js'

export default class PasteScriptAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        Project.get().loadClipboard(StorageConstant.type.NODES)
        return true
    }

}