define(function (require) {

    import Action from '../Action.js'
    import Project from '../../../project/Project.js'

    class SaveProjectAction extends Action {

        /**
         * @override
         */
        static run() {
            Project.get().save()
            return true
        }

    }

    export default SaveProjectAction

})