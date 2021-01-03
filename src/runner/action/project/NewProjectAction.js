define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')

    class NewProjectAction extends Action {

        /**
         * @override
         */
        static run() {
            World.new()
            return true
        }

    }

    return NewProjectAction

})