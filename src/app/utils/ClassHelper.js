import SystemError from '../exception/type/SystemError.js'
import StringHelper from './StringHelper.js'

/**
 * @class {ClassHelper}
 */
class ClassHelper {

    /**
     * Get the setter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */
    static getSetter(object, key) {
        let setter
        if (object.constructor === Array) {
            setter = 'push'
        } else {
            const prefix = 'set'
            setter = `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`
            if (typeof object[setter] !== 'function') {
                throw new SystemError(`${setter} must be implemented for ${object.constructor.name}`)
            }
        }
        return setter
    }

    /**
     * Get the getter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */
    static getGetter(object, key) {
        let getter
        if (object.constructor === Array) {
            getter = key
        } else {
            const prefix = 'get'
            getter = `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`
            if (typeof object[getter] !== 'function') {
                if(object.constructor === String){
                    throw new SystemError(`${key}: Object was expected, but "${object}" was provided`)
                }else{
                    throw new SystemError(`${key}: ${getter} must be implemented for ${object.constructor.name}`)
                }
            }
        }
        return getter
    }

    /**
     * @param {Function} setter
     * @return {string}
     */
    static getAttributeFromSetter(setter){
        const setterName = setter.name
        const regexSetter = new RegExp('^set(.+)$')
        const setterParts = setterName.match(regexSetter)
        if(setterParts.length > 0){
            return StringHelper.lowFirstLetter(setterParts[1])
        }
        throw new SystemError(`${setterName} not a function or a setter function`)
    }

}

export default ClassHelper