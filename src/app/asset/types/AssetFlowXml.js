import AssetType from './AssetType.js'
import World from '../../world/World.js'

/**
 * @class {AssetImage}
 */
export default class AssetFlowXml extends AssetType{

    constructor() {
        super()
        this.data = null
    }

    /**
     * @override
     */
    async load(xmlStr) {
        return new Promise(resolve => {
            const parser = new DOMParser()
            this.data = parser.parseFromString(xmlStr, 'application/xml')
            resolve(World.get().getFlowManager().load(this.data))
        })
    }

}