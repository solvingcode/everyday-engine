define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const Storage = require('../core/Storage.js')

    /**
     * Handle the history of action executed.
     * Use the storage to push/pop data.
     * This class is used to manage the Undo action
     */
    class History {

        constructor() {
            this.list = []
            this.entityManager = EntityManager.get()
            this.storage = Storage.get()
            this.maxList = 10
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
            if (this.list.length > this.maxList) {
                this.list.shift()
            }
            this.list.push(
                _.cloneDeep(this.storage.update(Storage.type.ENTITY, this.entityManager.entities))
            )
        }

    }

    History.instance = null

    return History
})