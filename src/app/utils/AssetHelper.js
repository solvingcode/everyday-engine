import AssetScript from '../asset/types/script/AssetScript.js'
import World from '../world/World.js'
import SystemError from '../exception/type/SystemError.js'

export default class AssetHelper{

    /**
     * @param {Asset} asset
     */
    static deleteAsset(asset){
        const scriptManager = World.get().getScriptManager()
        const assetManager = World.get().getAssetsManager()
        assetManager.deleteAsset(asset)
        if(asset.getType() instanceof AssetScript){
            const script = scriptManager.findByName(asset.getName())
            scriptManager.delete(script, World.get().getFunctionRegistry())
        }
    }

    /**
     * @param {number} assetId
     * @return {DynamicAttribute[]}
     */
    static getAssetScriptVars(assetId){
        return []
    }

    /**
     * @param {Asset} asset
     * @return {AScript}
     */
    static getScript(asset){
        if(asset.getType() instanceof AssetScript){
            const scriptManager = World.get().getScriptManager()
            return scriptManager.findByName(asset.getName())
        }
        throw new SystemError(`Asset "${asset.getName()}" is not a script`)
    }

}