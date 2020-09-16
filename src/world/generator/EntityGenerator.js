define(function () {
    /**
     * EntityGenerator class.
     * Generate an entity (related to the type, make and load the meshes)
     */
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