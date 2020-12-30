define(function(){

    /**
     * @class {ObjectHelper}
     */
    class ObjectHelper{
        /**
         * @param {Object} target
         * @param {Object} source
         *
         * @return {Object}
         */
        static deepMerge(target, source){
            for(const key in source){
                if(source.hasOwnProperty(key)){
                    if(_.isObject(source[key])){
                        target[key] = new target[key].constructor()
                        this.deepMerge(target[key], source[key])
                    }else{
                        Object.assign(target, {[key]: source[key]})
                    }
                }
            }
            return this.deepMerge(target, source)
        }
    }

    return ObjectHelper

})