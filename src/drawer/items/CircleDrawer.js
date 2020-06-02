define(function (require) {

    const EntityManager = require('../../world/manager/EntityManager.js')
    const CircleEntity = require('../../world/entity/CircleEntity.js')

    class CircleDrawer {

        /**
         * Draw a circle.
         * @param {Object} position 
         */
        static draw(position) {
            const entityManager = EntityManager.get()
            entityManager.load(position.x, position.y, CircleEntity)
        }

    }

    return CircleDrawer
})