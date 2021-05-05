import World from '../../../world/World.js'
import AssetScriptXmlGenerator from '../../../generator/script/AssetScriptXmlGenerator.js'
import EditGraphScriptContent from '../../../content/EditGraphScriptContent.js'
import EditScriptContent from '../../../content/EditScriptContent.js'
import AssetScript from './AssetScript.js'

export default class AssetScriptXml extends AssetScript{

    /**
     * @type {Document}
     */
    data

    constructor() {
        super()
        this.data = null
    }

    /**
     * @override
     */
    async load(xmlStr, asset) {
        return new Promise(resolve => {
            this.setDataUrl(xmlStr)
            const script = this.parse()
            asset.setName(script.getName())
            resolve(script)
        })
    }

    /**
     * @override
     */
    open(asset, options = {asXml: false}) {
        const tabManager = World.get().getTabManager()
        if(options.asXml){
            tabManager.createOrActivate(asset.getName(), new EditScriptContent(asset))
        }else{
            tabManager.createOrActivate(asset.getName(), new EditGraphScriptContent(asset))
        }
    }

    /**
     * @return {AScript}
     */
    parse(){
        return World.get().getScriptManager().load(this.data)
    }

    /**
     * @override
     * @param {AScript} flow
     * @param {Asset} asset
     */
    async generate(flow, asset){
        const data = AssetScriptXmlGenerator.get().generate(flow)
        await this.load(data, asset)
    }

    /**
     * @override
     * @param {Document} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @override
     * @return {Document}
     */
    getData(){
        return this.data
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(dataUrl, 'application/xml')
        if(doc.documentElement.tagName === 'html'){
            this.setError(`Script XML Parser: ${doc.documentElement.textContent}`)
        }else{
            this.setError('')
            this.data = doc
        }
    }

    /**
     * @override
     */
    getDataUrl() {
        return (new XMLSerializer()).serializeToString(this.data)
    }

}