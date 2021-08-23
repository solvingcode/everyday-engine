import AssetScript from '../asset/types/script/AssetScript.js'
import World from '../world/World.js'
import SystemError from '../exception/type/SystemError.js'
import VariableNode from '../flow/node/variable/VariableNode.js'
import NodeHelper from './NodeHelper.js'
import DynamicAttribute from '../pobject/DynamicAttribute.js'
import AssetAnimationScriptXml from '../asset/types/animation/AssetAnimationScriptXml.js'
import AnimationComponent from '../component/internal/AnimationComponent.js'
import ClientError from '../exception/type/ClientError.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import ScriptComponent from '../component/internal/ScriptComponent.js'
import AssetImage from '../asset/types/image/AssetImage.js'

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
                    if(animationComponent.getScript() === asset.getName()){
                        unit.deleteComponent(animationComponent.getId())
                    }
                })
        }else if (asset.getType() instanceof AssetScriptXml) {
            world.getUnitManager().findUnitsByComponentClasses([ScriptComponent])
                .forEach(unit => {
                    const scriptComponents = unit.findComponentsByClass(ScriptComponent)
                    scriptComponents.forEach(scriptComponent => {
                        if(scriptComponent.getScript() === asset.getName()){
                            unit.deleteComponent(scriptComponent.getId())
                        }
                    })
                })
        }else if(asset.getType() instanceof AssetImage){
            world.getUnitManager().emptyUnitsByAsset(asset)
            world.getAnimationManager().deleteFrameByAsset(asset)
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
            throw new ClientError(`No compiled script found for asset "${asset.getName()}"`)
        }
        return this.getScriptVars(script)
    }

    /**
     * @param {AScript} script
     * @return {DynamicAttribute[]}
     */
    static getScriptVars(script){
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

    /**
     * @param {Unit} unit
     * @param {Asset} asset
     */
    static attachAssetScriptToUnit(unit, asset) {
        if(asset.getType() instanceof AssetScriptXml){
            const scriptComponent = unit.createComponent(ScriptComponent)
            scriptComponent.setName(`${asset.getName()}`)
            scriptComponent.setScript(asset.getName())
            scriptComponent.setVarsAttributes(AssetHelper.getAssetScriptVars(asset.getId()))
        }else if(asset.getType() instanceof AssetAnimationScriptXml){
            const animationComponent = unit.createComponent(AnimationComponent)
            animationComponent.setName(`${asset.getName()}`)
            animationComponent.setVarsAttributes(AssetHelper.getAssetScriptVars(asset.getId()))
            animationComponent.setScript(asset.getName())
        }else{
            throw new ClientError(`Cannot attach asset "${asset.getType().constructor.name}" : Type not supported`)
        }
    }

}