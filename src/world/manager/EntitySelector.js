define(function (require) {

    const EntityManager = require('./EntityManager.js')

    class EntitySelector {
        constructor() {
            this.entities = []
        }

        get(point) {
            return EntityManager.get().entities.find((entity) => entity.includes(point))
        }

        focus(point) {
            this.get(point).focused = true
        }

        select(point) {
            const selectedEntity = this.get(point)
            if (selectedEntity && selectedEntity.selectable) {
                selectedEntity.select()
            }
        }

        unselectAll(){
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