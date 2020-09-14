define(function () {

    /**
     * Utils to manage the storage of data over time.
     * Handle clones and manage conflicts
     */
    class Storage {

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
            this.data[type] = data.clone()
            return this
        }

        /**
         * Get data from the storage
         * @param {String} type 
         */
        fetch(type) {
            const data = this.data[type]
            return data && data.clone()
        }

    }

    Storage.type = {
        ENTITY: 'entity'
    }

    Storage.instance = null

    return Storage
})