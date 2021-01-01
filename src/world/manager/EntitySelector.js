define(function () {

    class EntitySelector {
        constructor() {
            this.entities = []
        }

        /**
         * Get all entities selected
         * @param {World} world
         */
        getSelected(world) {
            return world.getEntityManager().entities.filter((entity) => entity.selected)
        }

        /**
         * Get first entity selected
         * @param {World} world
         */
        getFirstSelected(world) {
            const selectedEntities = this.getSelected(world)
            if (selectedEntities.length) {
                return selectedEntities[0]
            }
            return null
        }

        /**
         * Get the entity in a specific point (absolute position)
         * @param {World} world
         * @param {Object} point 
         * @param {Entity} exceptType 
         */
        get(world, point, exceptType = null) {
            const entities = this.getAll(world, point, exceptType)
            return entities.length && entities[entities.length - 1]
        }

        /**
         * Get all entities in a specific point (absolute position)
         * @param {World} world
         * @param {Object} point 
         * @param {Entity} exceptType 
         */
        getAll(world, point, exceptType = null) {
            return world.getEntityManager().getActiveEntities().filter((entity) =>
                entity.includes(point) && entity.selectable &&
                (!exceptType || !(entity instanceof exceptType))
            )
        }

        /**
         * Get all entities inside a selected area
         * @param {World} world
         * @param {Object} point 
         * @param {Object} size 
         */
        getInsideArea(world, point, size) {
            return world.getEntityManager().getActiveEntities().filter((entity) => {
                return entity.selectable &&
                    entity.position.x >= point.x &&
                    entity.position.x + entity.size.width <= point.x + size.width &&
                    entity.position.y >= point.y &&
                    entity.position.y + entity.size.height <= point.y + size.height
            })
        }

        /**
         * Select all entities inside the area of selection
         * @param {World} world
         * @param {Object} point 
         * @param {Object} size 
         * @param {Boolean} includeAttach 
         */
        select(world, point, size, includeAttach = false) {
            let selectedEntities = []
            if (!size || (!size.width && !size.height)) {
                const selectedEntity = this.get(world, point)
                if (selectedEntity) {
                    if (includeAttach) {
                        selectedEntities = selectedEntities.concat(
                            selectedEntity.getAttachedEntities(world.getEntityManager())
                        )
                    } else {
                        selectedEntities.push(selectedEntity)
                    }
                }
            } else {
                selectedEntities = this.getInsideArea(world, point, size)
            }
            return selectedEntities.map(selectedEntity => selectedEntity.isActive() && selectedEntity.select())
        }

        /**
         * Unselect all entities
         * @param {World} world
         */
        unselectAll(world) {
            world.getEntityManager().entities.map((entity) => entity.unselect())
        }

        /**
         * Unfocus all entities.
         * Do not unfocus entity in loading mode
         * @param {World} world
         */
        unfocusAll(world) {
            world.getEntityManager().getActiveEntities().map((entity) => entity.unfocus())
        }

        /**
         * focus all entities in a given point.
         * Do not focus entity in loading mode
         * @param {World} world
         * @param {Vector} point
         */
        focus(world, point) {
            this.getAll(world, point).map((entity) => entity.focus())
        }

        static get() {
            if (!EntitySelector.instance) {
                EntitySelector.instance = new EntitySelector()
            }
            return EntitySelector.instance
        }
    }

    EntitySelector.instance = null

    return EntitySelector
})