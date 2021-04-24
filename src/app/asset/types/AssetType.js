import AssetTypeData from '../../project/data/AssetTypeData.js'

/**
 * @class {AssetType}
 * @abstract
 */
export default class AssetType extends AssetTypeData{

    /**
     * @abstract
     * @param {*} data
     * @param {Asset} asset
     * @return {Promise}
     */
    async load(data, asset){
        throw new TypeError(`${this.constructor.name}.load must be implemented`)
    }

    /**
     * @abstract
     * @param {*} source
     * @param {Asset} asset
     * @return {Promise}
     */
    async generate(source, asset){
        throw new TypeError(`${this.constructor.name}.generate must be implemented`)
    }

    /**
     * @abstract
     * @param {Asset} asset
     */
    open(asset){
        throw new TypeError(`${this.constructor.name}.open must be implemented`)
    }

}