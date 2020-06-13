define(function (require) {

    const EntityGenerator = require('../generator/EntityGenerator.js')
    const Entity = require('../../entity/Entity.js')

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

        /**
         * Get an entity at (x,y)
         * @param {int} x 
         * @param {int} y 
         * @param {Entity} type 
         */
        getAt(x, y, type) {
            return this.entities.find((element) =>
                element instanceof type &&
                element.position.x === x &&
                element.position.y === y
            )
        }

        /**
         * Get an entity if founded, else create it
         * @param {int} x 
         * @param {int} y 
         * @param {Entity} type 
         */
        get(x, y, type) {
            if (!(type.prototype instanceof Entity)) {
                throw new TypeError(`type must be child of Entity class (${type} given)`)
            }
            const entity = this.getAt(x, y, type)
            if (!entity) {
                const element = new type({ position: { x, y } })
                this.entities.push(element)
            }
            return this.getAt(x, y, type)
        }

        /**
         * Load and generate an entity
         * @param {int} x 
         * @param {int} y 
         * @param {Entity} type 
         */
        load(x, y, type) {
            const entity = this.get(x, y, type)
            if (!entity.isBuffered) {
                this.make(entity)
            }
            return entity
        }

        /**
         * Make an entity.
         * @param {Entity} entity 
         */
        make(entity) {
            EntityGenerator.make(entity)
        }

        /**
         * Update the Mesh for all entities
         */
        update() {
            for (const iEntity in this.entities) {
                this.entities[iEntity].update()
            }
        }

    }

    EntityManager.instance = null

    return EntityManager
})