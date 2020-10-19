define(function (require) {

    const Action = require('../Action.js')

    class FormUpdateAction extends Action {

        /**
         * Update the form
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.delete(entity))
            return true
        }

    }

    return FormUpdateAction

})