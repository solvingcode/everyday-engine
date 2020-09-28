define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    class MoveAction extends Action {

        /**
         * Move selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            const instance = MoveAction.get()
            const dragDistance = mouse.getDragDistance()
            instance.position = mouse.position
            instance.relativeEntityPositions = instance.relativeEntityPositions ||
                selectedEntities.map(entity => entity.fromAbsolutePosition(instance.position))
            const targetPoint = { x: instance.position.x + dragDistance.x, y: instance.position.y + dragDistance.y }
            selectedEntities.map((entity, index) => {
                entity.moveRelativePointTo(entityManager, instance.relativeEntityPositions[index], targetPoint)
            })
            return false
        }

        /**
         * Stop the move action
         */
        static stop(mouse, selectedEntities) {
            const instance = MoveAction.get()
            const entityManager = EntityManager.get()
            instance.relativeEntityPositions = null
            instance.position = null
            selectedEntities.map(entity => entityManager.regenerate(entity))
            return true
        }

        static get() {
            if (!MoveAction.instance) {
                MoveAction.instance = new MoveAction()
            }
            return MoveAction.instance
        }

    }

    MoveAction.instance = null

    return MoveAction

})