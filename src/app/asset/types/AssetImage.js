import AssetType from './AssetType.js'
import Mesh from '../../core/Mesh.js'

/**
 * @class {AssetImage}
 */
export default class AssetImage extends AssetType{

    constructor() {
        super()
        this.data = new Mesh()
    }

    /**
     * @override
     */
    async load(image) {
        return this.data.fromImage(image);
    }

}