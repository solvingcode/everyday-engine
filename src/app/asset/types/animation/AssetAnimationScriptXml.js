import World from '../../../world/World.js'
import EditGraphScriptContent from '../../../content/script/EditGraphScriptContent.js'
import AssetScript from '../script/AssetScript.js'
import AssetAnimationScriptGenerator from '../../../generator/animation/AssetAnimationScriptGenerator.js'

export default class AssetAnimationScriptXml extends AssetScript{

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
    open(asset) {
        const tabManager = World.get().getTabManager()
        tabManager.createOrActivate(asset.getName(), new EditGraphScriptContent(asset))
    }

    /**
     * @return {AScript}
     */
    parse(){
        return World.get().getScriptManager().load(this.data)
    }

    /**
     * @override
     * @param {AnimationScript} flow
     * @param {Asset} asset
     */
    async generate(flow, asset){
        const data = AssetAnimationScriptGenerator.get().generate(flow)
        await this.setDataUrl(data)
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

    /**
     * @override
     */
    validate(data) {
        return true
    }
}