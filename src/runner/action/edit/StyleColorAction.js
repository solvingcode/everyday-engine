define(function (require) {

    const Action = require('../Action.js')

    class StyleColorAction extends Action {

        /**
         * Change color for selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            selectedEntities.forEach(entity => {
                entity.updateStyle()
            })
            return true
        }

    }

    return StyleColorAction

})