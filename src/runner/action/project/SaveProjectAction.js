define(function (require) {

    const Action = require('../Action.js')
    const Project = require('../../../project/Project.js')

    class SaveProjectAction extends Action {

        /**
         * @override
         */
        static run() {
            Project.get().save()
            return true
        }

    }

    return SaveProjectAction

})