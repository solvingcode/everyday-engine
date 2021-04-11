/**
 * @class {AssetType}
 * @abstract
 */
export default class AssetType {

    data

    /**
     * @param {*} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {*}
     */
    getData(){
        return this.data
    }

    /**
     * @abstract
     * @param {*} data
     * @param {Asset} asset
     */
    async load(data, asset){
        throw new TypeError(`${this.constructor.name}.load must be implemented`)
    }

}