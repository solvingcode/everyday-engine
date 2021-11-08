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
            case TYPES.MATERIAL:
                return 'string'
            case TYPES.COLOR:
                return 'string'
            case TYPES.COMPONENT_INSTANCE:
                return 'number'
            case TYPES.AUDIO:
                return 'number'
            case TYPES.SCENE:
                return 'number'
            case TYPES.FONT:
                return 'number'
            case TYPES.IMAGE:
                return 'number'
            case TYPES.UNIT_INSTANT:
                return 'number'
            case TYPES.PROMISE:
                return 'string'
            case TYPES.LIST:
                return 'string'
            case TYPES.FUNCTION:
                return 'string'
            case TYPES.MASK_GROUP_INSTANCE:
                return 'number'
            case TYPES.RANGE:
                return 'number'
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

    /**
     * @param {number} type
     * @return {string}
     */
    static getName(type){
        return TYPES_NAME.find(pType => pType.value === type).label
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
    MATERIAL:                       0b00000100000000001000000000,
    COLOR:                          0b00000100000000010000000000,
    AUDIO:                          0b00000100000000100000000000,
    LIST:                           0b00000100000001000000000000,
    FONT:                           0b00000100000010000000000000,
    SCENE:                          0b00000100000100000000000000,
    FUNCTION:                       0b00000100001000000000000000,
    IMAGE:                          0b00000100010000000000000000,
    UNIT_INSTANT:                   0b00000100100000000000000000,
    RANGE:                          0b00001000000000000000000001,
    STYLE:                          0b00010000000000000000000010,
    SIZE:                           0b00010000000000000000000100,
    VECTOR:                         0b00010000000000000000001000,
    DYNAMIC_ATTRIBUTE:              0b00010000000000000000010000,
    ARRAY:                          0b00100000000000000000000000,
    MESH:                           0b01000000000000000000000001,
    PROMISE:                        0b01000000000000000000000010
}

export const TYPES_NAME = [
    {
        value: TYPES.STRING,
        label: 'String'
    },
    {
        value: TYPES.NUMBER,
        label: 'Number'
    },
    {
        value: TYPES.BOOLEAN,
        label: 'Boolean'
    },
    {
        value: TYPES.VECTOR,
        label: 'Vector'
    },
    {
        value: TYPES.MASK_GROUP_INSTANCE,
        label: 'Mask Group'
    },
    {
        value: TYPES.UNIT,
        label: 'Unit'
    },
    {
        value: TYPES.PROMISE,
        label: 'Promise'
    },
    {
        value: TYPES.COMPONENT_INSTANCE,
        label: 'Component'
    }
]