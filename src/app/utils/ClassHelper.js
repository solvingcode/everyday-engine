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
                throw new TypeError(`${setter} must be implemented for ${object.constructor.name}`)
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
                    throw new TypeError(`${key}: Object was expected, but "${object}" was provided`)
                }else{
                    throw new TypeError(`${key}: ${getter} must be implemented for ${object.constructor.name}`)
                }
            }
        }
        return getter
    }

}

export default ClassHelper