define(function (require) {

    const PhysicsEngine = require('../PhysicsEngine.js')
    const ShapeLoader = require('../ShapeLoader.js')

    /**
     * Matter Physics Engine class
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
        loadShape(entity) {
            const shape = this.shapeLoader.load(entity)
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
            return Matter.Body.nextGroup(true)
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
        updateJointPosition(entity) {
            const points = entity.points
            const entities = entity.entities
            const pointA = entity.toAbsolutePosition(points.a)
            const pointB = entity.toAbsolutePosition(points.b)
            if (entity.attached) {
                entities.a && entities.a.movePointTo(pointA, pointB)
                entity.movePointTo(pointA, pointB)
                entity.updatePoints(pointB, {x: pointB.x + 1, y: pointB.y + 1})
                return true
            }
            return false
        }

        /**
         * @override
         */
        updateConstraint(entity, constraint){
            const {entityB, pointA, pointB} = constraint
            const body = this.getBodyFromEntity(entity)
            const bodyB = entityB && this.getBodyFromEntity(entityB)
            if(entityB && !bodyB){
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
            const {force, rotationConstraint} = entity.physics
            const {min: minRotation, max: maxRotation} = rotationConstraint
            if (entity.isControlled()) {
                const moveSpeed = 2
                this.getEngine().Body.setPosition(body, {x: body.position.x + moveSpeed, y: body.position.y})
            } else if (maxRotation && entity.rotation > maxRotation) {
                this.getEngine().Body.setAngle(body, maxRotation)
            } else if (minRotation && entity.rotation < minRotation) {
                this.getEngine().Body.setAngle(body, minRotation)
            } else {
                this.getEngine().Body.applyForce(body, entity.getForcePosition(), force)
            }
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

    return MatterEngine
})