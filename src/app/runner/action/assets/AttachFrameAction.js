import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import ClientError from '../../../exception/type/ClientError.js'
import AssetImage from '../../../asset/types/image/AssetImage.js'
import Asset from '../../../asset/Asset.js'
import Storage from '../../../core/Storage.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class AttachFrameAction extends Action {

    static STATE = 'ACTION_ATTACH_FRAME'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        const animation = endData.getAnimation()
        const world = World.get()
        const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
        const time = endData.getTime()
        const property = endData.getProperty()
        const selectedUnit = world.getUnitManager().getSelected()
        if (startData instanceof Asset && startData.getType() instanceof AssetImage) {
            const childUnit = world.getUnitManager().findUnitByName(property.getChildName())
            const targetUnit = childUnit || selectedUnit
            if (targetUnit) {
                const component = targetUnit.findComponentByName(property.getComponentName())
                const attribute = _.cloneDeep(component.get(property.getAttributeName()))
                attribute.setAttrValue(startData.getId())
                animation.setFrame(time, childUnit, property.getComponentName(), property.getAttributeName(), attribute)
                AssetHelper.regenerate(animationAsset, animation, Storage.get())
            }
        } else {
            throw new ClientError(`Source not supported! ("${startData.constructor.name}" given)`)
        }
        return true
    }

}