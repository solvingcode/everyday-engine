import AssetScript from '../asset/types/script/AssetScript.js'
import World from '../world/World.js'
import SystemError from '../exception/type/SystemError.js'
import VariableNode from '../flow/node/variable/VariableNode.js'
import NodeHelper from './NodeHelper.js'
import DynamicAttribute from '../pobject/DynamicAttribute.js'
import AssetAnimationScriptXml from '../asset/types/animation/AssetAnimationScriptXml.js'
import AnimationComponent from '../component/internal/AnimationComponent.js'

export default class AssetHelper {

    /**
     * @param {Asset} asset
     */
    static deleteAsset(asset) {
        const world = World.get()
        const scriptManager = world.getScriptManager()
        const assetManager = world.getAssetsManager()
        assetManager.deleteAsset(asset)
        if (asset.getType() instanceof AssetScript) {
            const script = scriptManager.findByName(asset.getName())
            scriptManager.delete(script, world.getFunctionRegistry())
        }
        if (asset.getType() instanceof AssetAnimationScriptXml) {
            world.getUnitManager().findUnitsByComponents([AnimationComponent])
                .forEach(unit => {
                    const animationComponent = unit.getComponent(AnimationComponent)
                    if(animationComponent.getAssetId() === asset.getId()){
                        unit.deleteComponent(animationComponent.getId())
                    }
                })
        }
    }

    /**
     * @param {number} assetId
     * @return {DynamicAttribute[]}
     */
    static getAssetScriptVars(assetId) {
        const assetManager = World.get().getAssetsManager()
        const asset = assetManager.findAssetById(assetId)
        if (!asset) {
            throw new SystemError(`Asset not found "${assetId}"`)
        }
        const script = this.getScript(asset)
        if (!script) {
            throw new TypeError(`No compiled script found for asset "${asset.getName()}"`)
        }
        const nodes = script.findNodesByClass(VariableNode)
        return nodes.map(node => {
            const sourceNode = NodeHelper.getSourceNode(node)
            return new DynamicAttribute(sourceNode.getName(), sourceNode.getOutput().getAttrType())
        })
    }

    /**
     * @param {Asset} asset
     * @return {AScript}
     */
    static getScript(asset) {
        if (asset.getType() instanceof AssetScript) {
            const scriptManager = World.get().getScriptManager()
            return scriptManager.findByName(asset.getName())
        }
        throw new SystemError(`Asset "${asset.getName()}" is not a script`)
    }

}