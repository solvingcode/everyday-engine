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

        select(point) {
            const selectedEntity = this.get(point)
            if (selectedEntity) {
                selectedEntity.select()
            }
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