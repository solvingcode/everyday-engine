import EntityGenerator from '../generator/EntityGenerator.js'
import Entity from '../../entity/Entity.js'
import AttachEntity from '../../entity/types/constraint/AttachEntity.js'
import VirtualEntity from '../../entity/VirtualEntity.js'
import Maths from '../../utils/Maths.js'
import EntityManagerData from '../../project/data/EntityManagerData.js'
import ComponentEntity from '../../entity/types/component/ComponentEntity.js'
import ManagedComponentEntity from '../../entity/types/component/ManagedComponentEntity.js'

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
     * @param {Vector} position
     * @param {Function} type
     * @return {Entity}
     */
    getAt(position, type) {
        return this.entities.find((element) =>
            element instanceof type &&
            position.equals(element.position)
        )
    }

    /**
     * @param {Entity} entity
     * @return {number}
     */
    getIndexOf(entity) {
        return this.entities.findIndex((element) =>
            element instanceof entity.constructor &&
            element.position.equals(entity.position)
        )
    }

    /**
     * @param {string|number} entityId
     * @return {Entity}
     */
    findById(entityId) {
        return this.entities.find((element) =>
            element.id === parseInt(entityId)
        )
    }

    /**
     * @param {string} name
     * @return {Entity}
     */
    findByName(name) {
        return this.entities.find((element) =>
            element.name === name
        )
    }

    /**
     * @param {Class} type
     * @return {Entity[]}
     */
    findByType(type) {
        return this.entities.filter(element => element instanceof type)
    }

    /**
     * Get an entity if founded, else create it
     * @param {Vector} position
     * @param {Function} type
     * @param {Object} defaultProps
     * @return {Entity}
     */
    get(position, type, defaultProps = {}) {
        if (!(type.prototype instanceof Entity)) {
            throw new TypeError(`type must be child of Entity class (${type} given)`)
        }
        const entity = this.getAt(position, type)
        if (!entity) {
            const props = Object.assign({position}, defaultProps)
            const element = new type(props)
            this.setupEntityName(element)
            this.add(element)
        }
        return this.getAt(position, type)
    }

    /**
     * Regenerate the mesh of all entities
     * NB: The local variable entities must be a copy of this.entities, and the loop forEach must be based
     * on that copy, because the regenerate method may remove elements in this.entities if is not valid,
     * and will have a side effect on the loop forEach
     * @param {World} world
     */
    regenerateAll(world) {
        this.entities.forEach(entity => entity.setGenerated(false))
        this.update(world)
    }

    /**
     * Load and generate an entity
     * @param {World} world
     * @param {Vector} position
     * @param {Function} type
     * @param {Object} props
     * @return {Entity}
     */
    load(world, position, type, props = {}) {
        const entity = this.get(position, type, props)
        if (!entity.isBuffered) {
            this.make(world, entity)
        }
        return entity
    }

    /**
     * @param {EntityMotion} entity
     */
    add(entity) {
        const rank = entity.rank
        const indexBiggerRank = this.entities.findIndex(pEntity => pEntity.rank > rank)
        if(indexBiggerRank >= 0){
            this.entities.splice(indexBiggerRank, 0, entity)
        }else{
            this.entities.push(entity)
        }
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
        this.getAllAttachTypeEntity(entity).forEach(pEntity => this.deleteEntity(pEntity))
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
     * @return {Entity}
     */
    clone(entity, options = {}) {
        const cloneEntity = entity.clone()
        cloneEntity.name = `Clone of ${entity.name}`
        cloneEntity.id = Maths.generateId()
        if (options.sameWorld) {
            cloneEntity.worldId = entity.id
        }
        return cloneEntity
    }

    /**
     * @param {number} entityId
     * @param {Object} options
     * @return {Entity}
     */
    cloneById(entityId, options = {}) {
        const entity = this.findById(entityId)
        return this.clone(entity, options)
    }

    /**
     * check if the entity and all attached entities must dies
     * @param {EntityMotion} entity
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
            const bodyEntityIdA = attachEntity.entityLinkIds[0]
            const bodyEntityIdB = attachEntity.entityLinkIds[1]
            const bodyIndexA = bodyEntities.findIndex(body => bodyEntityIdA === body.id)
            const bodyIndexB = bodyEntities.findIndex(body => bodyEntityIdB === body.id)
            let cloneEntityA = (bodyIndexA >= 0 && cloneBodyEntities[bodyIndexA])
            let cloneEntityB = (bodyIndexB >= 0 && cloneBodyEntities[bodyIndexB])
            if (!cloneEntityA && bodyEntityIdA) {
                cloneEntityA = this.cloneById(bodyEntityIdA, options)
                cloneBodyEntities.push(cloneEntityA)
            }
            if (!cloneEntityB && bodyEntityIdB) {
                cloneEntityB = this.cloneById(bodyEntityIdB)
                cloneBodyEntities.push(cloneEntityB)
            }
            cloneAttachEntity.setLinkEntities(cloneEntityA, cloneEntityB)
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
            entity.update(world)
            entity.addToBuffer(world)
        })
    }

    /**
     * Move an entity up (z-index)
     * @param {Entity} entity
     */
    moveUp(entity) {
        this.moveIndex(entity, true)
    }

    /**
     * Move an entity down (z-index)
     * @param {Entity} entity
     */
    moveDown(entity) {
        this.moveIndex(entity, false)
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
        entity.setGenerated(false)
    }

    /**
     * Show the given entity
     * @param {Entity} entity
     */
    show(entity) {
        entity.show(true)
        entity.setGenerated(false)
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
     * @param {boolean} up (1 = UP, 0 = DOWN)
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
        entity.setGenerated(false)
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
     * @return {boolean}
     */
    isBodyEntity(entity) {
        return !this.isAttachEntity(entity) &&
            !this.isVirtualEntity(entity) &&
            !this.isComponentEntity(entity)
    }

    /**
     * Is the given entity is an attach type
     * @param {Entity} entity
     * @return {boolean}
     */
    isAttachEntity(entity) {
        return entity instanceof AttachEntity
    }

    /**
     * @param {Entity} entity
     * @return {boolean}
     */
    isVirtualEntity(entity) {
        return entity instanceof VirtualEntity
    }

    /**
     * @param {Entity} entity
     * @return {boolean}
     */
    isComponentEntity(entity) {
        return entity instanceof ComponentEntity
    }

    /**
     * @param {Entity} entity
     * @return {boolean}
     */
    isManagedComponentEntity(entity) {
        return entity instanceof ManagedComponentEntity
    }

    /**
     * @param {Entity} entity
     * @return {boolean}
     */
    isManagedEntity(entity) {
        return this.isBodyEntity(entity) || this.isManagedComponentEntity(entity)
    }

    /**
     * Is the given entity is not static
     * @param {EntityMotion} entity
     */
    isNotStaticEntity(entity) {
        return !entity.isFixed() && !entity.isControlled()
    }

    hideComponents() {
        this.getComponentEntities().forEach(entity => this.hide(entity))
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
     * @param {Entity[]} excludeEntities
     */
    getAttachedEntities(entity, excludeEntities = []) {
        let attachedEntities = [entity]
        this.getAllAttachTypeEntity(entity).forEach(attachEntity => {
            attachedEntities.push(attachEntity)
            for (const kEntity in attachEntity.entities) {
                if (attachEntity.entities.hasOwnProperty(kEntity)) {
                    const entityAB = attachEntity.entities[kEntity]
                    if (entityAB !== entity && !excludeEntities.includes(entityAB)) {
                        attachedEntities = attachedEntities.concat(
                            this.getAttachedEntities(entityAB, attachedEntities)
                        )
                    }
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
            pEntity.entityLinkIds[0] === entity.id ||
            pEntity.entityLinkIds[1] === entity.id
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
     * Get entities that can be managed on the Layer panel and the scene
     * @return {Entity[]}
     */
    getManagedEntities() {
        return this.entities.filter(entity => this.isManagedEntity(entity))
    }

    /**
     * @return {ComponentEntity[]}
     */
    getComponentEntities() {
        return this.entities.filter(entity => this.isComponentEntity(entity))
    }

    /**
     * Get entities of type attach
     * @param {Entity[]} entities
     * @return {Entity[]}
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

    /**
     * @param {Entity} element
     */
    setupEntityName(element) {
        const initialName = element.getName()
        let name = initialName
        let existEntity = null
        let iDuplicate = 0
        do {
            element.setName(name)
            existEntity = this.findByName(name)
            if (existEntity) {
                iDuplicate++
                name = `${initialName} (${iDuplicate})`
            }
        } while (existEntity)
    }
}

export default EntityManager