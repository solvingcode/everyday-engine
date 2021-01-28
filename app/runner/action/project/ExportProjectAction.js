define(function (require) {

    import Action from '../Action.js'
    import Project from '../../../project/Project.js'

    class ExportProjectAction extends Action {

        /**
         * @override
         */
        static run() {
            Project.get().export()
            return true
        }

    }

    export default ExportProjectAction

})