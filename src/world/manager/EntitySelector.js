define(function (require) {

    const EntityManager = require('./EntityManager.js')

    class EntitySelector {
        constructor() {
            this.entities = []
        }

        get(point){
            return EntityManager.get().entities.find((entity) => entity.includes(point))
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