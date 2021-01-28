/**
 * EntityGenerator class.
 * Generate an entity (related to the type, make and load the meshes)
 */
class EntityGenerator {
    /**
     * Generate and build the Entity
     * @param {World} world
     * @param {Entity} entity
     */
    static make(world, entity) {
        return entity.updateStyle().build(world)
    }
}

export default EntityGenerator