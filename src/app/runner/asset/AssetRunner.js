import Runner from '../Runner.js'
import World from '../../world/World.js'
import Storage from '../../core/Storage.js'
import AssetAnimationXml from '../../asset/types/animation/AssetAnimationXml.js'
import AssetHelper from '../../utils/AssetHelper.js'
import SystemError from '../../exception/type/SystemError.js'
import AssetScript from '../../asset/types/script/AssetScript.js'

export default class AssetRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const assets = world.getAssetsManager().getParsedAssets().filter(asset => asset.isNameUpdated())
        for (const iAsset in assets) {
            const asset = assets[iAsset]
            const storage = Storage.get()
            let object
            if (asset.getType() instanceof AssetAnimationXml) {
                const animationManager = world.getAnimationManager()
                object = animationManager.findByName(asset.getOldName())
            } else if (asset.getType() instanceof AssetScript) {
                const scriptManager = world.getScriptManager()
                object = scriptManager.findByName(asset.getOldName())
            } else {
                throw new SystemError(`Cannot rename asset : ${asset.getType().constructor.name} not supported`)
            }
            if (object) {
                object.setName(asset.getName())
                AssetHelper.regenerate(asset, object, storage)
            }
            asset.setOldName(asset.getName())
        }
    }

}