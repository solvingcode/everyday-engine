define(function (require) {

    const EntityManager = require('./EntityManager.js')
    const AttachEntity = require('../entity/AttachEntity.js')

    class EntitySelector {
        constructor() {
            this.entities = []
        }

        /**
         * Get all entities selected
         */
        getSelected() {
            return EntityManager.get().entities.filter((entity) => entity.selected)
        }

        /**
         * Get the entity in a specific point (absolute position)
         * @param {Object} point 
         * @param {Entity} exceptType 
         */
        get(point, exceptType = null) {
            const entities = this.getAll(point, exceptType)
            return entities.length && entities[entities.length - 1]
        }

        /**
         * Get all entities in a specific point (absolute position)
         * @param {Object} point 
         * @param {Entity} exceptType 
         */
        getAll(point, exceptType = null) {
            return EntityManager.get().entities.filter((entity) =>
                entity.includes(point) && entity.selectable &&
                (!exceptType || !(entity instanceof exceptType))
            )
        }

        /**
         * Get all entities inside a selected area
         * @param {Object} point 
         * @param {Object} size 
         */
        getInsideArea(point, size) {
            return EntityManager.get().entities.filter((entity) => {
                return entity.selectable &&
                    entity.position.x >= point.x &&
                    entity.position.x + entity.size.width <= point.x + size.width &&
                    entity.position.y >= point.y &&
                    entity.position.y + entity.size.height <= point.y + size.height
            })
        }

        /**
         * Select all entities inside the area of selection
         * @param {Object} point 
         * @param {Object} size 
         * @param {Boolean} includeAttach 
         */
        select(point, size, includeAttach = false) {
            let selectedEntities = []
            if (!size || (!size.width && !size.height)) {
                const selectedEntity = this.get(point)
                if (selectedEntity) {
                    if (includeAttach) {
                        selectedEntities = selectedEntities.concat(
                            selectedEntity.getAttachedEntities(EntityManager.get(), AttachEntity)
                        )
                    } else {
                        selectedEntities.push(selectedEntity)
                    }
                }
            } else {
                selectedEntities = this.getInsideArea(point, size)
            }
            return selectedEntities.map(selectedEntity => selectedEntity.select())
        }

        /**
         * Unselect all entities
         */
        unselectAll() {
            EntityManager.get().entities.map((entity) => entity.unselect())
        }

        /**
         * Unfocus all entities.
         * Do not unfocus entity in loading mode
         */
        unfocusAll() {
            EntityManager.get().entities.map((entity) => !entity.loading && entity.unfocus())
        }

        /**
         * focus all entities in a given point.
         * Do not focus entity in loading mode
         */
        focus(point) {
            this.getAll(point).map((entity) => !entity.loading && entity.focus())
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