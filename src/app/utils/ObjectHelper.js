/**
 * @class {ObjectHelper}
 */
import StringHelper from './StringHelper.js'
import ClassHelper from './ClassHelper.js'
import SystemError from '../exception/type/SystemError.js'

class ObjectHelper {

    /**
     * @param {Object} object1
     * @param {Object} object2
     * @return {boolean}
     */
    static isEqual(object1, object2) {
        return !(Object.getOwnPropertyNames(object1)
            .find(prop => !object2 || object1[prop] !== object2[prop]))
    }

    /**
     * @param {Object} target
     * @param {Object} source
     */
    static assign(target, source) {
        Object.getOwnPropertyNames(source).forEach(srcProperty => {
            const setterProperty = `set${StringHelper.capFirstLetter(srcProperty)}`
            const valProperty = source[srcProperty]
            if (_.isObject(valProperty)) {
                this.assign(target[srcProperty], valProperty)
            } else {
                target && target[setterProperty](valProperty)
            }
        })
    }

    /**
     * @param {Object} object
     * @param {Function|ArrayConstructor} prototype
     * @returns {{index: number|null, key: string, value: *}[]}
     */
    static getProperties(object, prototype) {
        if (prototype === Array) {
            return _.isArray(object) ? object.map((value, index) => ({index, key: 'element', value})) : []
        } else if (_.isObject(object)) {
            try {
                const tempPrototype = new prototype()
                return Object.getOwnPropertyNames(tempPrototype)
                    .map(prop => {
                        let value
                        if (object) {
                            if (object.constructor === Object) {
                                value = object[prop]
                            } else {
                                const getter = ClassHelper.getGetter(object, prop)
                                value = object[getter]()
                            }
                        }
                        return {key: prop, value, index: null}
                    })
            }catch(e){
                throw new SystemError(`ObjectHelper ("${prototype.name}") : ${e.message}`)
            }
        }
    }

    /**
     * @param {Object|Array} object
     * @param {string} property
     * @param {Object|Array} propertyValue
     */
    static async setProperty(object, property, propertyValue) {
        if (_.isArray(object)) {
            object.push(propertyValue)
        } else if (_.isArray(propertyValue)) {
            const concatAttr = `concat${StringHelper.capFirstLetter(property)}`
            if (_.isFunction(object[concatAttr])) {
                object[concatAttr](propertyValue)
            } else {
                throw new SystemError(`Method ${concatAttr} not defined for ${object.constructor.name}`)
            }
        } else if (object !== null && object !== undefined) {
            const setter = ClassHelper.getSetter(object, property)
            await object[setter](propertyValue)
        }
    }

}

export default ObjectHelper