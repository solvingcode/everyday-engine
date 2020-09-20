define(function (require) {

    const EntityGenerator = require('../generator/EntityGenerator.js')
    const Entity = require('../../entity/Entity.js')

    /**
     * Entity Manager class
     * Manage the entities list, used to manipulate the entities (get, add, load, ...)
     */
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
         * Get the index of entity
         * @param {Entity} entity
         */
        getIndexOf(entity) {
            return this.entities.findIndex((element) =>
                element instanceof entity.constructor &&
                element.position.x === entity.position.x &&
                element.position.y === entity.position.y
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
         * Delete entity from the entities list
         * @param {Entity} entity 
         */
        delete(entity) {
            return this.entities.splice(this.getIndexOf(entity), 1)
        }

        /**
         * Clone entity to the entities list
         * @param {Entity} entity 
         */
        clone(entity) {
            const cloneEntity = entity.clone()
            if (cloneEntity) {
                this.entities.push(cloneEntity)
            }
            return cloneEntity
        }

        /**
         * Make an entity.
         * @param {Entity} entity 
         */
        make(entity) {
            return EntityGenerator.make(entity)
        }

        /**
         * Update the Mesh for all entities
         */
        update() {
            for (const iEntity in this.entities) {
                this.entities[iEntity].update()
            }
        }

        /**
         * Get all entities of specific type
         * @param {Entity} type 
         */
        getEntitiesAs(type) {
            return this.entities.filter(entity => entity instanceof type)
        }

        /**
         * Get all entities does not of specific type
         * @param {Entity} type 
         */
        getEntitiesNotAs(type) {
            return this.entities.filter(entity => !(entity instanceof type))
        }

        /**
         * Get attached entities (bidirectional)
         * @TODO This function is deprecated, must be revisited
         * @param {Entity} entity 
         * @param {Class} attachType
         * @param {Entity[]} exculdeEntities
         */
        getAttachedEntities(entity, attachType, exculdeEntities = []) {
            let attachedEntities = [entity]
            this.getAllAttachTypeEntity(entity, attachType).forEach(attachEntity => {
                attachedEntities.push(attachEntity)
                for (const kEntity in attachEntity.entities) {
                    const entityAB = attachEntity.entities[kEntity]
                    if (entityAB !== entity && !exculdeEntities.includes(entityAB)) {
                        attachedEntities = attachedEntities.concat(
                            this.getAttachedEntities(entityAB, attachType, attachedEntities)
                        )
                    }
                }
            })
            return attachedEntities
        }

        /**
         * Get all Attach entities for the given entity and type
         * @param {Entity} entity 
         * @param {Class} attachType
         */
        getAllAttachTypeEntity(entity, attachType) {
            return this.getEntitiesAs(attachType).filter(pEntity =>
                pEntity.entities.a === entity ||
                pEntity.entities.b === entity
            )
        }

    }

    EntityManager.instance = null

    return EntityManager
})