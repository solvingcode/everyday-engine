define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const EntityMotion = require('../entity/EntityMotion.js')

    class Physics {

        constructor() {
            this.entityManager = EntityManager.get()
        }

        /**
         * Update all entities.
         */
        update() {
            for (var iEntity in this.entityManager.entities) {
                const entity = this.entityManager.entities[iEntity]
                if (entity instanceof EntityMotion) {
                    this.entityManager.entities[iEntity].move(DIRECTION.BOTTOM)
                }
                if (entity != this.entityManager.entities[0] &&
                    entity.isCollide(this.entityManager.entities[0])) {
                    console.log('Collision with the Platform')
                }
            }
        }

    }

    return Physics
})