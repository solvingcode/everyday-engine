define(function () {

    class Action {

        constructor() {
            this.queue = []
        }

        static get() {
            if (!Action.instance) {
                Action.instance = new Action()
            }
            return Action.instance
        }

        /**
         * Add action to the queue.
         * @param {Object} object the object must define the method "execute"
         * @param  {...any} args 
         */
        add(object, ...args) {
            this.queue.push({ object, args })
        }

        /**
         * Run all actions. stop the exectution if the "execute" return true.
         */
        run() {
            for (const iQueue in this.queue) {
                const action = this.queue[iQueue]
                if (action.object.execute.apply(action.object, action.args)) {
                    break;
                }
            }
            this.queue = []
        }

    }

    Action.instance = null

    return Action
})