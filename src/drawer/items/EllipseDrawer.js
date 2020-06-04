define(function (require) {

    const EntityManager = require('../../world/manager/EntityManager.js')
    const EllipseEntity = require('../../world/entity/EllipseEntity.js')

    class EllipseDrawer {

        /**
         * Draw a ellipse.
         * @param {Object} position 
         */
        static draw(position) {
            const entityManager = EntityManager.get()
            entityManager.load(position.x, position.y, EllipseEntity)
        }

    }

    return EllipseDrawer
})