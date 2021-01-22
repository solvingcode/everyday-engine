define(function () {

    /**
     * @class {BinHelper}
     */
    class BinHelper {

        /**
         * @param {Object} data
         * @returns {Object}
         */
        static export(data) {
            if (_.isArray(data)) {
                throw new TypeError('Data to export as BIN must be an Object')
            }
            return JSON.stringify(data)
        }

    }

    return BinHelper

})