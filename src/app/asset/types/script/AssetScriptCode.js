import World from '../../../world/World.js'
import EditGraphScriptContent from '../../../content/EditGraphScriptContent.js'
import EditScriptCodeContent from '../../../content/EditScriptCodeContent.js'
import AssetScript from './AssetScript.js'
import AssetScriptCodeGenerator from '../../../generator/script/AssetScriptCodeGenerator.js'

export default class AssetScriptCode extends AssetScript{

    /**
     * @override
     */
    async load(code, asset) {
        return new Promise(resolve => {
            this.setDataUrl(code)
            const script = this.parse()
            asset.setName(script.getName())
            resolve(script)
        })
    }

    /**
     * @override
     */
    open(asset, options = {asGraph: false}) {
        const tabManager = World.get().getTabManager()
        if(options.asGraph){
            tabManager.createOrActivate(asset.getName(), new EditGraphScriptContent(asset))
        }else{
            tabManager.createOrActivate(asset.getName(), new EditScriptCodeContent(asset))
        }
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
        await this.load(data, asset)
    }

}