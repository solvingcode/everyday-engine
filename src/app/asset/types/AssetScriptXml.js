import AssetType from './AssetType.js'
import World from '../../world/World.js'

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
     * @return {AScript}
     */
    parse(){
        return World.get().getScriptManager().load(this.data)
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
     * @override
     */
    async setDataUrl(dataUrl) {
        const parser = new DOMParser()
        this.data = parser.parseFromString(dataUrl, 'application/xml')
    }

    /**
     * @override
     */
    getDataUrl() {
        return (new XMLSerializer()).serializeToString(this.data)
    }

}