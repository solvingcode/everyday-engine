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

    constructor() {
        super()
        this.data = null
    }

    /**
     * @override
     */
    async load(xmlStr, asset) {
        return new Promise(resolve => {
            const parser = new DOMParser()
            this.data = parser.parseFromString(xmlStr, 'application/xml')
            const script = World.get().getScriptManager().load(this.data)
            asset.setName(script.getName())
            resolve(script)
        })
    }

}