define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const Storage = require('../core/Storage.js')
    const _ = require('lib/lodash.min')

    class History {

        constructor() {
            this.list = []
            this.entityManager = EntityManager.get()
            this.storage = Storage.get()
        }

        static get() {
            if (!History.instance) {
                History.instance = new History()
            }
            return History.instance
        }

        /**
         * Get the last element in the list
         */
        pop() {
            const data = this.list.length && this.list.pop()
            if (data) {
                this.entityManager.entities = data.fetch(Storage.type.ENTITY)
            }
            return data
        }

        /**
         * Push all data into the history
         */
        push() {
            this.list.push(
                _.cloneDeep(this.storage.update(Storage.type.ENTITY, this.entityManager.entities))
            )
        }

    }

    History.instance = null

    return History
})