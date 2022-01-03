import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Unit from '../../../unit/Unit.js'
import Scene from '../../../scene/Scene.js'
import UIUnitInstant from '../../../unit/instant/type/internal/ui/UIUnitInstant.js'
import UIContainerUnitInstant from '../../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'
import ClientError from '../../../exception/type/ClientError.js'
import AssetScript from '../../../asset/types/script/AssetScript.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import AssetImage from '../../../asset/types/image/AssetImage.js'
import TileGridUnitInstant from '../../../unit/instant/type/internal/tile/TileGridUnitInstant.js'
import TileMapUnitInstant from '../../../unit/instant/type/internal/tile/TileMapUnitInstant.js'
import World from '../../../world/World.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'
import UIEmptyUnitInstant from '../../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'
import UIButtonUnitInstant from '../../../unit/instant/type/internal/ui/UIButtonUnitInstant.js'
import UITextUnitInstant from '../../../unit/instant/type/internal/ui/UITextUnitInstant.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class AttachLayerElementAction extends Action {

    static STATE = 'ACTION_ATTACH_LAYER_ELEMENT'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        if (startData instanceof UIUnitInstant && !(
            endData instanceof UIContainerUnitInstant ||
            endData instanceof UIImageUnitInstant ||
            endData instanceof UIEmptyUnitInstant ||
            endData instanceof UIButtonUnitInstant ||
            endData instanceof UITextUnitInstant)) {
            throw new ClientError(`UI Unit must be child of UI Container`)
        }
        if (startData instanceof TileMapUnitInstant && !(endData instanceof TileGridUnitInstant)) {
            throw new ClientError(`Tile Map must be child of Tile Grid`)
        }
        if (endData instanceof Unit && startData instanceof Unit && endData !== startData) {
            startData.setUnitParentId(endData.getId())
            UnitHelper.reserveTransform(World.get(), startData)
        } else if (endData instanceof Scene && startData instanceof Unit) {
            startData.setUnitParentId(null)
        } else if (endData instanceof Unit && startData.getType() instanceof AssetScript) {
            AssetHelper.attachAssetScriptToUnit(endData, startData, World.get())
        } else if (endData instanceof Unit && startData.getType() instanceof AssetImage) {
            AssetHelper.attachAssetImageToUnit(endData, startData)
        }
        return true
    }

}