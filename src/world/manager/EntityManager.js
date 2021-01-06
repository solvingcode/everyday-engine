define(function (require) {

    const EntityGenerator = require('../generator/EntityGenerator.js')
    const Entity = require('../../entity/Entity.js')
    const AttachEntity = require('../../entity/types/joint/AttachEntity.js')
    const GroupEntity = require('../../entity/VirtualEntity.js')
    const Maths = require('../../utils/Maths.js')
    const EntityManagerData = require('../../project/data/EntityManagerData.js')

    /**
     * Entity Manager class
     * Manage the entities list, used to manipulate the entities (get, add, load, ...)
     *
     * @property {EntityMotion[]} entities
     */
    class EntityManager extends EntityManagerData {

        constructor() {
            super()
            this.entities = []
        }

        /**
         * Get an entity at (x,y)
         * @param {int} x
         * @param {int} y
         * @param {Entity} type
         * @return {Entity}
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
         * Find an entity by Id
         * @param {string|number} entityId
         * @return {Entity}
         */
        findById(entityId) {
            return this.entities.find((element) =>
                element.id === parseInt(entityId)
            )
        }

        /**
         * Get an entity if founded, else create it
         * @param {int} x
         * @param {int} y
         * @param {Entity} type
         * @param {Object} defaultProps
         * @return {Entity}
         */
        get(x, y, type, defaultProps = {}) {
            if (!(type.prototype instanceof Entity)) {
                throw new TypeError(`type must be child of Entity class (${type} given)`)
            }
            const entity = this.getAt(x, y, type)
            if (!entity) {
                const name = `Layer ${this.entities.length}`
                const props = Object.assign(defaultProps, {position: {x, y}, name})
                const element = new type(props)
                this.entities.push(element)
            }
            return this.getAt(x, y, type)
        }

        /**
         * Regenerate the mesh of all entities
         * @param {World} world
         */
        regenerateAll(world) {
            const entities = this.entities.map(entity => entity)
            entities.forEach(entity => this.regenerate(world, entity))
        }

        /**
         * Load and generate an entity
         * @param {World} world
         * @param {Vector} position
         * @param {Entity} type
         * @param {Object} props
         * @return {Entity}
         */
        load(world, position, type, props = {}) {
            const {x, y} = position
            const entity = this.get(x, y, type, props)
            if (!entity.isBuffered) {
                this.make(world, entity)
            }
            return entity
        }

        /**
         * @param {EntityMotion} entity
         */
        add(entity) {
            this.entities.push(entity)
        }

        /**
         * Delete entity from the entities list
         * @param {Entity} entity
         */
        deleteEntity(entity) {
            return this.entities.splice(this.getIndexOf(entity), 1)
        }

        /**
         * Delete the given entity and all related AttachEntity
         * @param {Entity} entity
         */
        delete(entity) {
            this.getAllAttachTypeEntity(entity).map(pEntity => this.deleteEntity(pEntity))
            this.deleteEntity(entity)
        }

        /**
         * Delete the given entity and all related AttachEntity (by Id)
         * @param {number} entityId
         */
        deleteById(entityId) {
            const entity = this.findById(entityId)
            this.delete(entity)
        }

        /**
         * Clone entity to the entities list
         * @param {Entity} entity
         * @param {Object} options
         */
        clone(entity, options = {}) {
            const cloneEntity = entity.clone()
            cloneEntity.name = `Clone of ${entity.name}`
            cloneEntity.id = Maths.generateId()
            options.sameWorld && (cloneEntity.worldId = entity.id)
            return cloneEntity
        }

        /**
         * check if the entity and all attached entities must dies
         * @param {Entity} entity
         * @param {PhysicsEngine} physicsEngine
         */
        haveToDie(entity, physicsEngine) {
            const attachedEntities = entity.getAttachedEntities(this)
            entity.haveToDie(physicsEngine)
            if (entity.isDead()) {
                attachedEntities.forEach(aEntity => this.isBodyEntity(aEntity) && aEntity.setDie(true))
            }
        }

        /**
         * Clone given entities.
         * Manage cloning attach and body entities
         * @param {Entity[]} entities
         * @param {Object} options
         * @todo think to optimize the clone process
         */
        cloneEntities(entities, options = {}) {
            const bodyEntities = this.getBodyEntities(entities).filter(entity => entity.clonable)
            const attachEntities = this.getAttachEntities(entities).filter(entity => entity.clonable)
            const cloneBodyEntities = bodyEntities.map(entity => this.clone(entity))
            const cloneAttachEntities = attachEntities.map(entity => this.clone(entity))
            attachEntities.forEach((attachEntity, attachIndex) => {
                const cloneAttachEntity = cloneAttachEntities[attachIndex]
                const bodyEntityA = attachEntity.entities.a
                const bodyEntityB = attachEntity.entities.b
                const bodyIndexA = bodyEntities.findIndex(body => bodyEntityA === body)
                const bodyIndexB = bodyEntities.findIndex(body => bodyEntityB === body)
                let cloneEntityA = (bodyIndexA >= 0 && cloneBodyEntities[bodyIndexA])
                let cloneEntityB = (bodyIndexB >= 0 && cloneBodyEntities[bodyIndexB])
                if (!cloneEntityA && bodyEntityA) {
                    cloneEntityA = this.clone(bodyEntityA, options)
                    cloneBodyEntities.push(cloneEntityA)
                }
                if (!cloneEntityB && bodyEntityB) {
                    cloneEntityB = this.clone(bodyEntityB)
                    cloneBodyEntities.push(cloneEntityB)
                }
                cloneAttachEntity.entities.a = cloneEntityA
                cloneAttachEntity.entities.b = cloneEntityB
            })
            return cloneBodyEntities.concat(cloneAttachEntities)
        }

        /**
         * Concat entities
         * @param {Entity[]} entities
         */
        concatEntities(entities) {
            this.entities = this.entities.concat(entities)
        }

        /**
         * Replace entities
         * @param {Entity[]} entities
         */
        replaceEntities(entities) {
            this.entities = entities
        }

        /**
         * Make an entity.
         * @param {World} world
         * @param {Entity} entity
         */
        make(world, entity) {
            return EntityGenerator.make(world, entity)
        }

        /**
         * Regenerate the given entity and delete if not valid
         * @param {World} world
         * @param {Entity} entity
         */
        regenerate(world, entity) {
            entity.regenerate(world)
        }

        /**
         * Update the Mesh for all entities
         * @param {World} world
         */
        update(world) {
            this.entities.forEach(entity => {
                if (!entity.isGenerated()) {
                    entity.setGenerated(true)
                    entity.updateTexture(world)
                    entity.regenerate(world)
                }
                entity.addToBuffer(world)
            })
        }

        /**
         * Move an entity up (z-index)
         * @param {Entity} entity
         */
        moveUp(entity) {
            this.moveIndex(entity, 1)
        }

        /**
         * Move an entity down (z-index)
         * @param {Entity} entity
         */
        moveDown(entity) {
            this.moveIndex(entity, 0)
        }

        /**
         * Lock entity for modification
         * @param {Entity} entity
         */
        lock(entity) {
            this.lockEntity(entity, true)
        }

        /**
         * Unlock entity for modification
         * @param {Entity} entity
         */
        unlock(entity) {
            this.lockEntity(entity, false)
        }

        /**
         * Hide the given entity
         * @param {Entity} entity
         */
        hide(entity) {
            entity.show(false)
        }

        /**
         * Show the given entity
         * @param {Entity} entity
         */
        show(entity) {
            entity.show(true)
        }

        /**
         * Replace entities by the given list
         * @param {Entity[]} entities
         */
        replace(entities) {
            this.entities = entities
        }

        /**
         * Move the index of an entity up/down.
         * NB: The first element in the list is always the Platform Entity.
         * @param {Entity} entity
         * @param {Boolean} up (1 = UP, 0 = DOWN)
         */
        moveIndex(entity, up) {
            const entities = this.getBodyEntities()
            const index = entities.findIndex((pEntity => pEntity === entity))
            if ((index < entities.length - 1 && up) || index > 1) {
                const newIndex = up ? index + 1 : index - 1
                this.permutEntity(entity, entities[newIndex])
            }
        }

        /**
         * Permute two entities
         * @param {Entity} entityA
         * @param {Entity} entityB
         */
        permutEntity(entityA, entityB) {
            const indexA = this.entities.findIndex((pEntity => pEntity === entityA))
            const indexB = this.entities.findIndex((pEntity => pEntity === entityB))
            if (indexA >= 0 && indexB >= 0 && !entityB.selected) {
                this.entities[indexA] = entityB
                this.entities[indexB] = entityA
            }
        }

        /**
         * Lock/Unlock the given entity and all attached type entities
         * @param {Entity} entity
         * @param {Boolean} lock
         */
        lockEntity(entity, lock) {
            this.getAllAttachTypeEntity(entity).map(pEntity => this.lockEntity(pEntity, lock))
            entity.lock(lock)
        }

        /**
         * Get valid entities (not in loading mode, ...)
         */
        getValidEntities() {
            return this.entities.filter(entity => entity.isValid())
        }

        /**
         * Is the given entity is a body type
         * @param {Entity} entity
         */
        isBodyEntity(entity) {
            return !(entity instanceof AttachEntity) && !(entity instanceof GroupEntity)
        }

        /**
         * Is the given entity is an attach type
         * @param {Entity} entity
         */
        isAttachEntity(entity) {
            return entity instanceof AttachEntity
        }

        /**
         * Is the given entity is not static
         * @param {EntityMotion} entity
         */
        isNotStaticEntity(entity) {
            return !entity.isFixed() && !entity.isControlled()
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
         * Get attached entities (bidirectional).
         * PS: The list include the given entity
         * @param {Entity} entity
         * @param {Entity[]} exculdeEntities
         */
        getAttachedEntities(entity, exculdeEntities = []) {
            let attachedEntities = [entity]
            this.getAllAttachTypeEntity(entity).forEach(attachEntity => {
                attachedEntities.push(attachEntity)
                for (const kEntity in attachEntity.entities) {
                    const entityAB = attachEntity.entities[kEntity]
                    if (entityAB !== entity && !exculdeEntities.includes(entityAB)) {
                        attachedEntities = attachedEntities.concat(
                            this.getAttachedEntities(entityAB, attachedEntities)
                        )
                    }
                }
            })
            return _.uniq(attachedEntities)
        }

        /**
         * Get all Attach entities for the given entity and type
         * @param {Entity} entity
         */
        getAllAttachTypeEntity(entity) {
            return this.getAttachEntities().filter(pEntity =>
                pEntity.entities.a === entity ||
                pEntity.entities.b === entity
            )
        }

        /**
         * Get active entities
         */
        getActiveEntities() {
            return this.entities.filter(entity => entity.isActive())
        }

        /**
         * Get entities of type body
         * @param {Entity[]} entities
         */
        getBodyEntities(entities = null) {
            return (entities || this.entities).filter(entity => this.isBodyEntity(entity))
        }

        /**
         * Get entities of type attach
         * @param {Entity[]} entities
         */
        getAttachEntities(entities = null) {
            return (entities || this.entities).filter(entity => this.isAttachEntity(entity))
        }

        /**
         * Get dynamic entities (not static, like platform, ...)
         * @param {EntityMotion[]} entities
         * @return {EntityMotion[]}
         */
        getDynamicEntities(entities = null) {
            return (entities || this.entities).filter((entity) => this.isNotStaticEntity(entity))
        }

        /**
         * Get valid entities of type body
         * @return {Entity[]}
         */
        getValidBodyEntities() {
            return this.getBodyEntities().filter(entity => entity.isValid())
        }

        /**
         * Disable collision for not static entities
         */
        disableCollision() {
            this.getDynamicEntities().map(entity => entity.setCollisionGroup(-1))
        }

    }

    return EntityManager
})