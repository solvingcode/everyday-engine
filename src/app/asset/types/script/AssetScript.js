import AssetType from '../AssetType.js'
import SystemError from '../../../exception/type/SystemError.js'
import ClientError from '../../../exception/type/ClientError.js'

/**
 * @abstract
 */
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
     * @override
     */
    async load(data, asset) {
        return new Promise(resolve => {
            this.setDataUrl(data)
            const script = this.parse()
            script.setAssetId(asset.getId())
            asset.setName(script.getName())
            resolve(script)
        })
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
     * @return {string}
     */
    getName(){
        return this.name
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

    /**
     * @abstract
     * @param {AScript} data
     * @return {boolean}
     */
    validate(data){
        throw new ClientError(`${this.constructor.name}.validate must be implemented`)
    }

}