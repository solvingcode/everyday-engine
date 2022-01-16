import ObjectHelper from './ObjectHelper.js'

export default class ArrayHelper {

    /**
     * @param {Array} array1
     * @param {Array} array2
     * @param {Function} comparator
     * @return {boolean}
     */
    static isEqual(array1, array2, comparator = null) {
        if (array1.length !== array2.length) {
            return false
        }
        for (const iArray1 in array1) {
            const element1 = array1[iArray1]
            const element2 = array2[iArray1]
            if (typeof comparator === 'function') {
                if (!comparator(element1, element2)) {
                    return false
                }
            }else if (_.isObject(element1) && _.isObject(element2)) {
                if (!ObjectHelper.isEqual(element1, element2)) {
                    return false
                }
            }else if (array1[iArray1] !== array2[iArray1]) {
                return false
            }
        }
        return true
    }

    /**
     * @param {*[]} array
     * @param {number} indexA
     * @param {number} indexB
     */
    static permute(array, indexA, indexB){
        const elementB = array[indexB]
        array[indexB] = array[indexA]
        array[indexA] = elementB
    }

}
