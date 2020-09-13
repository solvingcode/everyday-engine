define(function (require) {

    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const Runner = require('../Runner.js')

    class WindowRunner extends Runner {

        /**
         * Execute all windows actions (move mouse, ...)
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const entitySelector = EntitySelector.get()
            entitySelector.unfocusAll()
            entitySelector.focus(mouse.currentPosition)
        }

        static get() {
            if (!WindowRunner.instance) {
                WindowRunner.instance = new WindowRunner()
            }
            return WindowRunner.instance
        }
    }

    WindowRunner.instance = null

    return WindowRunner
})