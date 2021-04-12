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
     */
    async load(data, asset){
        throw new TypeError(`${this.constructor.name}.load must be implemented`)
    }

}