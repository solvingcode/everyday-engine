import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import ClientError from '../../../exception/type/ClientError.js'
import Folder from '../../../asset/Folder.js'
import Asset from '../../../asset/Asset.js'

export default class AttachFolderAction extends Action {

    static STATE = 'ACTION_ATTACH_FOLDER'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        if (!(endData instanceof Folder)) {
            throw new ClientError(`Destination must be a folder`)
        }
        if (startData instanceof Folder || startData instanceof Asset) {
            startData.setFolderId(endData.getId())
        } else {
            throw new ClientError(`Source "${startData.constructor.name} not allowed`)
        }
        return true
    }

}