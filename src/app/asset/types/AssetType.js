import AssetTypeData from '../../project/data/AssetTypeData.js'
import SystemError from '../../exception/type/SystemError.js'
import ClientError from '../../exception/type/ClientError.js'

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
        throw new SystemError(`${this.constructor.name}.load must be implemented`)
    }

    /**
     * @abstract
     * @param {*} source
     * @param {Asset} asset
     * @return {Promise}
     */
    async generate(source, asset){
        throw new SystemError(`${this.constructor.name}.generate must be implemented`)
    }

    /**
     * @abstract
     * @param {Asset} asset
     * @param {Object} options
     */
    open(asset, options){
        throw new SystemError(`${this.constructor.name}.open must be implemented`)
    }

    /**
     * @abstract
     * @param {*} data
     * @param {World} world
     * @return {boolean}
     */
    validate(data, world){
        throw new ClientError(`${this.constructor.name}.validate must be implemented`)
    }

    /**
     * @abstract
     * @param {Asset} asset
     */
    export(asset){
        throw new SystemError(`${this.constructor.name}.export must be implemented`)
    }

    /**
     * @abstract
     * @param {string} oldName
     * @param {string} newName
     * @return {void}
     */
    rename(oldName, newName){
        throw new SystemError(`${this.constructor.name}.rename must be implemented`)
    }

    /**
     * @abstract
     */
    parse(){
        throw new SystemError(`${this.constructor.name}.parse must be implemented`)
    }

}