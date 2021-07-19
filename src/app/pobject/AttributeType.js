import Style from './Style.js'
import Size from './Size.js'
import Vector from '../utils/Vector.js'
import DynamicAttribute from './DynamicAttribute.js'
import BlobData from '../project/data/BlobData.js'
import SystemError from '../exception/type/SystemError.js'

export default class AttributeType {

    /**
     * @param {number|string} prototype
     * @param {Object} parentPathData
     * @return {number|Class}
     */
    static extractPrototype(prototype, parentPathData) {
        if (_.isString(prototype) || _.isNumber(prototype)) {
            const dynamicPrototype = this.extractDynamicPrototypeName(prototype, parentPathData)
            return this.mapPrototype(dynamicPrototype || prototype)
        }
        return prototype
    }

    /**
     * @param {number|string} prototype
     * @param {Object} parentPathData
     * @return {number}
     */
    static extractDynamicPrototypeName(prototype, parentPathData){
        if (_.isObject(parentPathData)) {
            const dynamicTypeRegex = _.isString(prototype) && /^\[([a-zA-Z]+)]$/.exec(prototype)
            const dynamicType = dynamicTypeRegex && dynamicTypeRegex[1]
            if (dynamicType) {
                return parseInt(parentPathData[dynamicType])
            }
        }
    }

    /**
     * @return {string|Class}
     */
    static mapPrototype(prototype) {
        switch (prototype) {
            case TYPES.ANY:
                return 'string'
            case TYPES.STRING:
                return 'string'
            case TYPES.BOOLEAN:
                return 'boolean'
            case TYPES.NUMBER:
                return 'number'
            case TYPES.UNIT:
                return 'number'
            case TYPES.ANIMATION:
                return 'number'
            case TYPES.COMPONENT:
                return 'string'
            case TYPES.COMPONENT_INSTANCE:
                return 'number'
            case TYPES.MASK_GROUP_INSTANCE:
                return 'number'
            case TYPES.RANGE:
                return 'range'
            case TYPES.MESH:
                return BlobData
            case TYPES.STYLE:
                return Style
            case TYPES.SIZE:
                return Size
            case TYPES.VECTOR:
                return Vector
            case TYPES.DYNAMIC_ATTRIBUTE:
                return DynamicAttribute
            default:
                if(this.isArrayType(prototype)){
                    return Array
                }
                throw new SystemError(`AttributeType not supported (${prototype})`)
        }
    }

    /**
     * @param {number} type
     * @return {boolean}
     */
    static isArrayType(type){
        return this.has(type, TYPES.ARRAY)
    }

    /**
     * @param {number} type
     * @return {number}
     */
    static getArrayElementType(type){
        for(const maskType in TYPES){
            const mask = TYPES[maskType]
            if(mask !== TYPES.ARRAY && this.has(type, mask)){
                return mask
            }
        }
    }

    /**
     * @param {number|string} type
     * @param {number} typeMask
     * @return {boolean}
     */
    static has(type, typeMask){
        return (parseInt(type) & typeMask) === typeMask
    }

    /**
     * @param {number|string} type
     * @param {number} typeMask
     * @return {boolean}
     */
    static is(type, typeMask){
        return parseInt(type) === typeMask
    }

}

/**
 * [category][type for each category]
 * [000000][00000000000000000000]
 * Define attribute types :
 * 000001: Primitive
 * 000010: Advanced Primitive
 * 000100: Simple Object
 * 001000: Arrays
 * 010000: Advanced Object (Blob, ...)
 * @type {Object}
 */
export const TYPES = {
    ANY:                            0b00000100000000000000000001,
    STRING:                         0b00000100000000000000000010,
    BOOLEAN:                        0b00000100000000000000000100,
    NUMBER:                         0b00000100000000000000001000,
    UNIT:                           0b00000100000000000000010000,
    ANIMATION:                      0b00000100000000000000100000,
    COMPONENT:                      0b00000100000000000001000000,
    COMPONENT_INSTANCE:             0b00000100000000000010000000,
    MASK_GROUP_INSTANCE:            0b00000100000000000100000000,
    RANGE:                          0b00001000000000000000000001,
    STYLE:                          0b00010000000000000000000010,
    SIZE:                           0b00010000000000000000000100,
    VECTOR:                         0b00010000000000000000001000,
    DYNAMIC_ATTRIBUTE:              0b00010000000000000000010000,
    ARRAY:                          0b00100000000000000000000000,
    MESH:                           0b01000000000000000000000001
}