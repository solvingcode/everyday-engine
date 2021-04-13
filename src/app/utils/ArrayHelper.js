export default class ArrayHelper {

    /**
     * @param {Array} array1
     * @param {Array} array2
     * @return {boolean}
     */
    static isEqual(array1, array2) {
        if(array1.length !== array2.length){
            return false
        }
        for(const iArray1 in array1){
            if(array1[iArray1] !== array2[iArray1]){
                return false
            }
        }
        return true
    }

}
