import AssetType from './AssetType.js'
import World from '../../world/World.js'

/**
 * @class {AssetImage}
 */
export default class AssetFlowXml extends AssetType{

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
            const flow = World.get().getFlowManager().load(this.data)
            asset.setName(flow.getName())
            resolve(flow)
        })
    }

}