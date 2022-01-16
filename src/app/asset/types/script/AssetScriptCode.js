import World from '../../../world/World.js'
import EditScriptCodeContent from '../../../content/script/EditScriptCodeContent.js'
import AssetScript from './AssetScript.js'
import AssetScriptCodeGenerator from '../../../generator/script/AssetScriptCodeGenerator.js'

export default class AssetScriptCode extends AssetScript{

    /**
     * @override
     */
    open(asset) {
        const tabManager = World.get().getTabManager()
        tabManager.createOrActivate(asset.getName(), new EditScriptCodeContent(asset))
    }

    /**
     * @override
     */
    parse(){
        return World.get().getScriptManager().load(this.getDataUrl())
    }

    /**
     * @return {string}
     */
    getDataUrl() {
        return this.dataUrl
    }

    /**
     * @override
     * @param {AScript} flow
     * @param {Asset} asset
     */
    async generate(flow, asset){
        const data = AssetScriptCodeGenerator.get().generate(flow)
        await this.setDataUrl(data)
    }

}