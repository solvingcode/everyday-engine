define(function (require) {

    import Action from '../Action.js'
    import World from '../../../world/World.js'
    import AttachEntity from '../../../entity/types/constraint/AttachEntity.js'

    class ShowAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = World.get().getEntityManager()
            selectedEntities.forEach(entity => 
                !(entity instanceof AttachEntity) && entityManager.show(entity))
            return true
        }

    }

    export default ShowAction

})