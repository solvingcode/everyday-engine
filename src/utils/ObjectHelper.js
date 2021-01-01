define(function(){

    /**
     * @class {ObjectHelper}
     */
    class ObjectHelper{

        /**
         * @param {Object} object1
         * @param {Object} object2
         * @return {boolean}
         */
        static isEqual(object1, object2){
            return !(Object.getOwnPropertyNames(object1)
                .find(prop => object1[prop] !== object2[prop]))
        }

    }

    return ObjectHelper

})