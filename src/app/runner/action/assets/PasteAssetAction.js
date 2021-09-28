import Action from '../Action.js'
import World from '../../../world/World.js'
import StorageHelper from '../../../utils/StorageHelper.js'
import ClipboardManager from '../../../manager/ClipboardManager.js'

export default class PasteAssetAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        StorageHelper.getUnitsFromClipboard()
            .then(units => units
                .map(unit => assetsManager.createUnitInstant(selectedFolder, unit, ClipboardManager.get().getContent())))
        return true
    }

}