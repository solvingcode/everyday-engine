import * as StorageConstant from '../../constant/StorageConstant.js'
import SystemError from '../../exception/type/SystemError.js'
import UnitDataIdGenerator from './id/UnitDataIdGenerator.js'
import UnitDataTypeGenerator from './type/UnitDataTypeGenerator.js'

export default class DataGenerator {

    /**
     * @param {*} data
     * @param {string} type
     */
    static set(data, type){
        this.getDataIdGenerator(type).generate(data)
        this.getDataTypeGenerator(type).generate(data)
    }

    /**
     * @param {string} type
     * @return {DataIdGenerator}
     */
    static getDataIdGenerator(type){
        switch (type){
            case StorageConstant.type.UNITS:
                return UnitDataIdGenerator
            default:
                throw new SystemError(`Storage type "${type}" not supported`)
        }
    }

    /**
     * @param {string} type
     * @return {DataTypeGenerator}
     */
    static getDataTypeGenerator(type){
        switch (type){
            case StorageConstant.type.UNITS:
                return UnitDataTypeGenerator
            default:
                throw new SystemError(`Storage type "${type}" not supported`)
        }
    }

}