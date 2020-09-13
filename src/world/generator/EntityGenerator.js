define(function () {
    class EntityGenerator {
        /**
         * Generate and build the Entity
         * @param {Entity} entity 
         */
        static make(entity) {
            entity.loading = true
            return entity.updateStyle().build()
        }
    }

    return EntityGenerator
})