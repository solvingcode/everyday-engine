define(function(){

    /**
     * @class {ClassHelper}
     */
    class ClassHelper{

        /**
         * Get the setter name
         * @param {*} object
         * @param {string} key
         * @return {string}
         */
        static getSetter(object, key) {
            let setter
            if(object.constructor === Array){
                setter = 'push'
            }else {
                const prefix = 'set'
                setter = `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`
                if (typeof object[setter] !== 'function') {
                    throw new TypeError(`${setter} must be implemented for ${object.constructor.name}`)
                }
            }
            return setter
        }

    }

    return ClassHelper

})