import AssetType from '../AssetType.js'

export default class AssetScript extends AssetType{

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    error

    /**
     * @abstract
     * @return {AScript}
     */
    parse(){
        throw new TypeError(`${this.constructor.name}.parse must be implemented`)
    }

    /**
     * @abstract
     */
    async generate(source, asset) {
        throw new TypeError(`${this.constructor.name}.generate must be implemented`)
    }

    /**
     * @abstract
     */
    async load(data, asset) {
        throw new TypeError(`${this.constructor.name}.load must be implemented`)
    }

    /**
     * @abstract
     */
    open(asset, options) {
        throw new TypeError(`${this.constructor.name}.open must be implemented`)
    }

    /**
     * @param {string} error
     */
    setError(error){
        this.error = error
    }

    /**
     * @return {string}
     */
    getError(){
        return this.error
    }

    /**
     * @param {*} data
     */
    setData(data){
        throw new TypeError(`${this.constructor.name}.setData must be implemented`)
    }

    /**
     * @return {*}
     */
    getData(){
        throw new TypeError(`${this.constructor.name}.getData must be implemented`)
    }

}