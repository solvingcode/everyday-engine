import PhysicsEngine from '../PhysicsEngine.js'
import ShapeLoader from '../ShapeLoader.js'
import Vector from '../../../utils/Vector.js'

/**
 * Matter Physics Engine class
 * @extends {PhysicsEngine}
 */
class MatterEngine extends PhysicsEngine {

    constructor() {
        super()
    }

    /**
     * @override
     */
    init() {
        this.engine = Matter.Engine.create()
        this.shapeLoader = new ShapeLoader(this)
    }

    /**
     * @override
     */
    loadShape(entity, world) {
        const shape = this.shapeLoader.load(entity, world)
        Matter.World.add(this.engine.world, shape)
        return shape
    }

    /**
     * @override
     */
    update(entity) {
        this.shapeLoader.update(entity)
    }

    /**
     * Run the physics engine
     */
    run() {
        //Matter.Engine.run(this.engine)
    }

    /**
     * Stop the physics engine
     */
    stopEngine() {
        Matter.World.clear(this.engine.world)
        Matter.Engine.clear(this.engine)
        this.engine = null
    }

    /**
     * @override
     */
    updateEngine() {
        Matter.Engine.update(this.engine)
    }

    /**
     * @override
     */
    getEngine() {
        return Matter
    }

    /**
     * @override
     */
    getBodies() {
        return Matter.Composite.allBodies(this.engine.world)
    }

    /**
     * @override
     */
    getJoints() {
        return Matter.Composite.allConstraints(this.engine.world)
    }

    /**
     * @override
     */
    newGroup() {
        return Matter.ContentMenuItem.nextGroup(true)
    }

    /**
     * @override
     */
    updateCollisionFilters(entity) {
        const body = this.getBodyFromEntity(entity)
        body.collisionFilter = entity.collision
        return true
    }

    /**
     * @override
     */
    updateJointPosition(world, entity) {
        const {vertices} = entity
        const pointA = entity.toAbsolutePosition(vertices[0])
        const pointB = entity.toAbsolutePosition(vertices[1])
        if (entity.attached) {
            const entityA = entity.getLinkedEntityAt(0, world)
            entityA && entityA.movePointTo(pointA, pointB)
            entity.movePointTo(pointA, pointB)
            entity.updatePoints(pointB, new Vector({x: pointB.x + 1, y: pointB.y + 1}))
            return true
        }
        return false
    }

    /**
     * @override
     */
    updateConstraint(entity, constraint) {
        const {entityB, pointA, pointB} = constraint
        const body = this.getBodyFromEntity(entity)
        const bodyB = entityB && this.getBodyFromEntity(entityB)
        if (entityB && !bodyB) {
            throw new TypeError(`updateConstraint failed! Body not found for entity ${entity.id}`)
        }
        body.bodyB = bodyB
        body.angleB = bodyB && bodyB.angle
        body.pointA = pointA
        body.pointB = pointB
    }

    /**
     * @override
     * @todo Implement an intelligent controlling physics
     */
    applyPhysics(body, entity) {
        const {force} = entity.physics
        if (entity.isControlled()) {
            const moveSpeed = 2
            this.getEngine().ContentMenuItem.setPosition(body, {x: body.position.x + moveSpeed, y: body.position.y})
        } else {
            this.getEngine().ContentMenuItem.applyForce(body, entity.getForcePosition(), force)
        }
    }

    /**
     * @override
     */
    removeShape(entity) {
        const body = this.getBodyFromEntity(entity)
        this.getEngine().World.remove(this.engine.world, body)
    }

    /**
     * @override
     */
    isCollide(entityAId, entityBId) {
        const physicsManager = this.getPhysicsManager()
        const entityA = physicsManager.getEntityById(entityAId)
        const entityB = physicsManager.getEntityById(entityBId)
        if (!entityA || !entityB) {
            throw new TypeError(`Cannot check collision - entity not founded (A: ${!!entityA}, B: ${!!entityB})`)
        }
        const bodyA = this.getBodyFromEntity(entityA)
        const bodyB = this.getBodyFromEntity(entityB)
        if (!bodyA || !bodyB) {
            throw new TypeError(`Cannot check collision - body not founded (A: ${!!bodyA}, B: ${!!bodyB})`)
        }
        const collision = Matter.SAT.collides(bodyA, bodyB)
        return collision.collided
    }

}

export default MatterEngine