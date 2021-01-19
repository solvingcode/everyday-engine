define(function (require) {

    const Action = require('../Action.js')
    const Project = require('../../../project/Project.js')

    class ExportProjectAction extends Action {

        /**
         * @override
         */
        static run() {
            Project.get().export()
            return true
        }

    }

    return ExportProjectAction

})