define(function () {
    class EntityGenerator {
        /**
         * Generate and build the Entity
         * @param {Entity} entity 
         */
        static make(entity) {
            entity.build()
        }
    }

    return EntityGenerator
})