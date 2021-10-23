export default class NumberHelper {

    /**
     * @param {number} t
     * @param {number} t1
     * @param {number} v1
     * @param {number} t2
     * @param {number} v2
     * @return {number}
     */
    static interpolate(t, t1, v1, t2, v2){
        return v1 + ((t - t1) / (t2 - t1)) * (v2 - v1)
    }

}