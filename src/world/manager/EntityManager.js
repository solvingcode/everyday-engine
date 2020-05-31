define(function (require) {

    const EntityGenerator = require('../generator/EntityGenerator.js')
    const Entity = require('../../core/Entity.js')

    class EntityManager {
        constructor() {
            this.entities = []
        }

        static get() {
            if (!EntityManager.instance) {
                EntityManager.instance = new EntityManager()
            }
            return EntityManager.instance
        }

        getAt(x, y) {
            return this.entities.find((element) =>
                element.position.x === x &&
                element.position.y === y
            )
        }

        get(x, y) {
            const entity = this.getAt(x, y)
            if (!entity) {
                const element = new Entity({ position: { x, y }, size: 400 })
                this.entities.push(element)
            }
            return this.getAt(x, y)
        }

        load(x, y) {
            const entity = this.get(x, y)
            EntityGenerator.make(entity)
        }

        update() {
            for (const iEntity in this.entities) {
                this.entities[iEntity].update()
            }
        }

    }

    EntityManager.instance = null

    return EntityManager
})