define(function () {

    /**
     * Utils to manage the storage of data over time.
     * Handle clones and manage conflicts
     * @property {Object} data
     */
    class Storage {

        /**
         * @type {Storage}
         */
        static instance

        constructor() {
            this.data = {}
        }

        static get() {
            if (!Storage.instance) {
                Storage.instance = new Storage()
            }
            return Storage.instance
        }

        /**
         * Update the storage (merge data)
         * @param {String} type 
         * @param {Object} data 
         */
        update(type, data) {
            this.data[type] = _.cloneDeep(data)
            return this
        }

        /**
         * Get data from the storage
         * @param {String} type
         * @return {Object}
         */
        fetch(type) {
            const data = this.data[type]
            return data && _.cloneDeep(data)
        }

    }

    Storage.type = {
        ENTITY: 'entity'
    }

    return Storage
})