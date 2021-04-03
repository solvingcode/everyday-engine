/**
 * @class {ObjectHelper}
 */
import StringHelper from './StringHelper.js'

class ObjectHelper {

    /**
     * @param {Object} object1
     * @param {Object} object2
     * @return {boolean}
     */
    static isEqual(object1, object2) {
        return !(Object.getOwnPropertyNames(object1)
            .find(prop => object1[prop] !== object2[prop]))
    }

    /**
     * @param {Object} target
     * @param {Object} source
     */
    static assign(target, source){
        Object.getOwnPropertyNames(source).forEach(srcProperty => {
            const setterProperty = `set${StringHelper.capFirstLetter(srcProperty)}`
            const valProperty = source[srcProperty]
            if(_.isObject(valProperty)){
                this.assign(target[srcProperty], valProperty)
            }else{
                target && target[setterProperty](valProperty)
            }
        })
    }

}

export default ObjectHelper