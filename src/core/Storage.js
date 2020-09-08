define(function (require) {

    const _ = require('lib/lodash.min')

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
            this.data[type] = _.cloneDeep(data)
            return this
        }

        /**
         * Get data from the storage
         * @param {String} type 
         */
        fetch(type) {
            const data = this.data[type]
            return data && _.cloneDeep(data)
        }

    }

    Storage.type = {
        ENTITY: 'entity'
    }

    Storage.instance = null

    return Storage
})