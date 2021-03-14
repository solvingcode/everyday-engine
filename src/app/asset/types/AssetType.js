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
     */
    async load(data){
        throw new TypeError(`${this.constructor.name}.load must be implemented`)
    }

}