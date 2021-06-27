import World from '../../../world/World.js'
import AssetScriptXmlGenerator from '../../../generator/script/AssetScriptXmlGenerator.js'
import AssetScript from './AssetScript.js'
import EditGraphScriptContent from '../../../content/script/EditGraphScriptContent.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import FileHelper from '../../../utils/FileHelper.js'

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
     */
    validate(data){
        return ScriptHelper.validate(data)
    }

    /**
     * @override
     * @param {AScript} flow
     * @param {Asset} asset
     */
    async generate(flow, asset){
        const data = AssetScriptXmlGenerator.get().generate(flow)
        await this.setDataUrl(data)
    }

    /**
     * @override
     */
    rename(newName){
        World.get().getScriptManager().rename(this.data, newName)
        this.parse()
    }

    /**
     * @override
     */
    export(asset) {
        FileHelper.save(this.getDataUrl(), FileHelper.type.XML, asset.getName())
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