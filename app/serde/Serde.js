define(function () {

    /**
     * @abstract
     * @class {SerDe}
     */
    class SerDe{

        /**
         * @abstract
         * @param {Object} data
         * @return {string}
         */
        serialize(data){
            throw new TypeError('SerDe.serialize must be implemented')
        }

        /**
         * @abstract
         * @param {Object|string} data
         * @return {Object|Map<string, *>}
         */
        deserialize(data){
            throw new TypeError('SerDe.deserialize must be implemented')
        }

    }

    return SerDe

})