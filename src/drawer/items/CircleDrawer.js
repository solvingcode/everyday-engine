define(function (require) {

    const EntityManager = require('../../world/manager/EntityManager.js')

    class CircleDrawer {

        /**
         * Draw a circle.
         * @param {Object} position 
         */
        static draw(position) {
            const entityManager = EntityManager.get()
            entityManager.load(position.x, position.y)
            console.log(`Drawing circle at ${position.x}...`)
        }

    }

    return CircleDrawer
})