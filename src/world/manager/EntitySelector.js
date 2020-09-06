define(function (require) {

    const EntityManager = require('./EntityManager.js')

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
         */
        get(point) {
            return EntityManager.get().entities.find((entity) => entity.includes(point) && entity.selectable)
        }

        focus(point) {
            this.get(point).focused = true
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
         */
        select(point, size) {
            let selectedEntities = []
            if (!size || (!size.width && !size.height)) {
                const selectedEntity = this.get(point)
                selectedEntity && selectedEntities.push(selectedEntity)
            } else {
                selectedEntities = this.getInsideArea(point, size)
            }
            return selectedEntities.map(selectedEntity => selectedEntity.select())
        }

        unselectAll() {
            EntityManager.get().entities.map((entity) => entity.unselect())
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