import AssetScript from '../asset/types/script/AssetScript.js'
import World from '../world/World.js'

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

}