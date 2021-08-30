import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetScript from '../../../asset/types/script/AssetScript.js'
import ClientError from '../../../exception/type/ClientError.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class CompileAssetScriptAction extends Action {

    static STATE = 'ACTION_COMPILE_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            if (asset.getType() instanceof AssetScript) {
                const script = World.get().getScriptManager().findByName(asset.getName())
                if (script) {
                    script.compile(world)
                    const unitsAttached = unitManager.findUnitsAttachedToScript(script)
                    unitsAttached.forEach(unit => {

                        const oldScriptComponent = unitManager.findComponentAttachedToScript(unit, script)
                        const oldAttributes = oldScriptComponent.getAttributes()
                        unit.deleteComponent(oldScriptComponent.getId())

                        AssetHelper.attachAssetScriptToUnit(unit, asset)
                        const newScriptComponent = unitManager.findComponentAttachedToScript(unit, script)
                        newScriptComponent.getAttributes().forEach(attribute => {
                            const oldAttribute = oldAttributes
                                .find(pOldAttribute =>
                                    pOldAttribute.getAttrName() === attribute.getAttrName() &&
                                    pOldAttribute.getAttrType() === attribute.getAttrType()
                                )
                            if(oldAttribute){
                                attribute.setAttrValue(oldAttribute.getAttrValue())
                            }
                        })

                    })
                } else {
                    throw new ClientError(`Compile script asset: Asset "${asset.getName()}" is not parsed`)
                }
            }
        })
        return true
    }

}