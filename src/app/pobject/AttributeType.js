import Style from './Style.js'
import Size from './Size.js'
import Vector from '../utils/Vector.js'
import DynamicAttribute from './DynamicAttribute.js'
import BlobData from '../project/data/BlobData.js'
import SystemError from '../exception/type/SystemError.js'

export default class AttributeType {

    /**
     * @param {string} prototype
     * @param {Object} parentPathData
     * @return {string|Class}
     */
    static extractPrototype(prototype, parentPathData) {
        if (_.isString(prototype)) {
            const dynamicPrototype = this.extractDynamicPrototypeName(prototype, parentPathData)
            return this.mapPrototype(dynamicPrototype || prototype)
        }
        return prototype
    }

    /**
     * @param {string} prototype
     * @param {Object} parentPathData
     * @return {string|null}
     */
    static extractDynamicPrototypeName(prototype, parentPathData){
        if (_.isObject(parentPathData)) {
            const dynamicTypeRegex = /^\[([a-zA-Z]+)]$/.exec(prototype)
            const dynamicType = dynamicTypeRegex && dynamicTypeRegex[1]
            if (dynamicType) {
                return parentPathData[dynamicType]
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
     * @param {string} type
     * @return {boolean}
     */
    static isArrayType(type){
        return _.isString(type) && !!type.match(/^3[0-9]+$/)
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
    ANY: '000',
    STRING: '001',
    BOOLEAN: '003',
    NUMBER: '004',
    UNIT: '005',
    ANIMATION: '006',
    COMPONENT: '007',
    RANGE: '101',
    STYLE: '202',
    SIZE: '203',
    VECTOR: '204',
    DYNAMIC_ATTRIBUTE: '205',
    ARRAY_STRING: '301',
    ARRAY_NUMBER: '302',
    ARRAY_VECTOR: '303',
    ARRAY_DYNAMIC_ATTRIBUTE: '304',
    MESH: '501'
}