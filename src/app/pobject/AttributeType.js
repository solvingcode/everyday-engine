import Style from './Style.js'
import Size from './Size.js'
import Vector from '../utils/Vector.js'
import AssetTypeData from '../asset/types/AssetTypeData.js'

export default class AttributeType {

    /**
     * @param {string} prototype
     * @param {Object} data
     * @return {string|Class}
     */
    static extractPrototype(prototype, data) {
        if (_.isString(prototype)) {
            const dynamicPrototype = this.extractPrototypeName(prototype, data)
            return this.mapPrototype(dynamicPrototype || prototype)
        }
        return prototype
    }

    /**
     * @param {string} prototype
     * @param {Object} data
     * @return {string|null}
     */
    static extractPrototypeName(prototype, data){
        if (_.isObject(data)) {
            const dynamicTypeRegex = /^\[([a-zA-Z]+)]$/.exec(prototype)
            const dynamicType = dynamicTypeRegex && dynamicTypeRegex[1]
            if (dynamicType) {
                return data[dynamicType]
            }
        } else if(data){
            throw new TypeError(`The given data must be an Object to extract prototype (${data} given)`)
        }
        return null
    }

    /**
     * @return {string|Class}
     */
    static mapPrototype(prototype) {
        switch (prototype) {
            case TYPES.STRING:
                return 'string'
            case TYPES.BOOLEAN:
                return 'boolean'
            case TYPES.NUMBER:
                return 'number'
            case TYPES.RANGE:
                return 'range'
            case TYPES.MESH:
                return AssetTypeData
            case TYPES.STYLE:
                return Style
            case TYPES.SIZE:
                return Size
            case TYPES.VECTOR:
                return Vector
            default:
                if(this.isArrayType(prototype)){
                    return Array
                }
                throw new TypeError(`AttributeType not supported (${prototype})`)
        }
    }

    /**
     * @param {string} type
     * @return {boolean}
     */
    static isArrayType(type){
        return _.isString(type) && !!type.match(/^3[0-9]+$/)
    }

    /**
     * @param {string} prototype
     * @return {string|Class}
     */
    static extractArrayElementPrototype(prototype){
        switch (prototype) {
            case TYPES.ARRAY_STRING:
                return TYPES.STRING
            case TYPES.ARRAY_NUMBER:
                return TYPES.NUMBER
            case TYPES.ARRAY_VECTOR:
                return TYPES.VECTOR
            default:
                throw new TypeError(`Attribute ElementArrayType not supported (${prototype})`)
        }
    }

}

/**
 * Define attribute types :
 * 0XX: Primitive
 * 1XX: Advanced Primitive
 * 2XX: Simple Object
 * 3XX: Arrays
 * 5XX: Advanced Object (Blob, ...)
 * @type {Object}
 */
export const TYPES = {
    STRING: '001',
    BOOLEAN: '003',
    NUMBER: '004',
    RANGE: '101',
    STYLE: '202',
    SIZE: '203',
    VECTOR: '204',
    ARRAY_STRING: '301',
    ARRAY_NUMBER: '302',
    ARRAY_VECTOR: '303',
    MESH: '501'
}