define(function (require) {

    const EntityGenerator = require('../generator/EntityGenerator.js')
    const Entity = require('../../core/Entity.js')

    class EntityManager {
        constructor(world) {
            this.entities = []
            this.world = world
        }

        static get(world) {
            if (!EntityGenerator.instance) {
                EntityGenerator.instance = new EntityGenerator(world)
            }
            return EntityGenerator.instance
        }

        getAt(x, y) {
            return this.entities.find((element) => element.position.x === x && element.position.y === y)
        }

        get(x, y) {
            const entity = this.getAt(x, y)
            if (!entity) {
                const element = new Entity({ x, y })
                this.entities.push(element)
            }
            return this.getAt(x, y)
        }

        load(x, y) {
            const entity = this.get(x, y)
            EntityGenerator.make(entity)
        }

        update(world) {
            for (const iEntity in this.entities) {
                this.entities[iEntity].update(world)
            }
        }

    }

    EntityManager.instance = null

    return EntityManager
})