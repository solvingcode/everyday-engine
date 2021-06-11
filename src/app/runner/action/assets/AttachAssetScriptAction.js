import Action from '../Action.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import ScriptComponent from '../../../component/internal/ScriptComponent.js'
import AssetScriptXml from '../../../asset/types/script/AssetScriptXml.js'
import AssetAnimationScriptXml from '../../../asset/types/animation/AssetAnimationScriptXml.js'
import AnimationComponent from '../../../component/internal/AnimationComponent.js'

export default class AttachAssetScriptAction extends Action {

    static STATE = 'ACTION_ATTACH_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        if(selectedAsset.getType() instanceof AssetScriptXml){
            const scriptComponent = selectedUnit.createComponent(ScriptComponent)
            scriptComponent.setAssetId(selectedAsset.getId())
        }else if(selectedAsset.getType() instanceof AssetAnimationScriptXml){
            const animationComponent = selectedUnit.createComponent(AnimationComponent)
            animationComponent.setAssetId(selectedAsset.getId())
        }
        return true
    }

}