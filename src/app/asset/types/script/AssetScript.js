import AssetType from '../AssetType.js'
import SystemError from '../../../exception/type/SystemError.js'

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
        throw new SystemError(`${this.constructor.name}.parse must be implemented`)
    }

    /**
     * @abstract
     */
    async generate(source, asset) {
        throw new SystemError(`${this.constructor.name}.generate must be implemented`)
    }

    /**
     * @abstract
     */
    async load(data, asset) {
        throw new SystemError(`${this.constructor.name}.load must be implemented`)
    }

    /**
     * @abstract
     */
    open(asset, options) {
        throw new SystemError(`${this.constructor.name}.open must be implemented`)
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
        throw new SystemError(`${this.constructor.name}.setData must be implemented`)
    }

    /**
     * @return {*}
     */
    getData(){
        throw new SystemError(`${this.constructor.name}.getData must be implemented`)
    }

}