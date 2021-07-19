import AssetType from '../AssetType.js'
import Mesh from '../../../core/Mesh.js'
import ImageHelper from '../../../utils/ImageHelper.js'

/**
 * @class {AssetImage}
 */
export default class AssetImage extends AssetType{

    /**
     * @type {Mesh}
     */
    data

    constructor() {
        super()
        this.data = new Mesh()
    }

    /**
     * @override
     */
    async load(image, asset) {
        return this.data.fromImage(image);
    }

    /**
     * @param {Mesh} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {Mesh}
     */
    getData(){
        return this.data
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        await this.data.fromImage(dataUrl)
    }

    /**
     * @override
     */
    getDataUrl() {
        return ImageHelper.getDataURL(this.data.context.canvas, this.data.getSize())
    }

    async generate(source, asset) {
        return Promise.resolve(undefined)
    }

    /**
     * @override
     */
    open(asset, options) {
    }

    /**
     * @override
     */
    rename(oldName, newName) {
    }

}