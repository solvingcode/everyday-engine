import AssetType from './AssetType.js'
import World from '../../world/World.js'
import TabManager from '../../manager/TabManager.js'
import EditScriptContent from '../../content/EditScriptContent.js'
import AssetScriptXmlGenerator from '../../generator/AssetScriptXmlGenerator.js'

/**
 * @class {AssetImage}
 */
export default class AssetScriptXml extends AssetType{

    /**
     * @type {string}
     */
    name

    /**
     * @type {Document}
     */
    data

    /**
     * @type {string}
     */
    error

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
    open(asset) {
        TabManager.get().createOrActivate(asset.getName(), new EditScriptContent(asset))
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
     * @param {Document} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {Document}
     */
    getData(){
        return this.data
    }

    /**
     * @param {string} error
     */
    setError(error){
        this.error = error
    }

    /**
     * @return {string}
     */
    getError(){
        return this.error
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