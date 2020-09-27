define(function (require) {

    const Storage = require('../core/Storage.js')

    /**
     * Handle the history of action executed.
     * Use the storage to push/pop data.
     * This class is used to manage the Undo action
     */
    class History {

        constructor() {
            this.list = []
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
            return this.list.length && this.list.pop()
        }

        /**
         * Push data into the history
         */
        push(type, data) {
            if (this.list.length > this.maxList) {
                this.list.shift()
            }
            this.list.push(_.cloneDeep(this.storage.update(type, data)))
        }

    }

    History.instance = null

    return History
})