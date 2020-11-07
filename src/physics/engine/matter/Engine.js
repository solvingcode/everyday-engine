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
         * @inherit
         */
        init() {
            this.engine = Matter.Engine.create()
            this.shapeLoader = new ShapeLoader(this)
        }

        /**
         * @inherit
         */
        loadShape(entity) {
            const shape = this.shapeLoader.load(entity)
            Matter.World.add(this.engine.world, shape)
            return shape
        }

        /**
         * @inherit
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
         * @inheritDoc
         */
        updateEngine() {
            Matter.Engine.update(this.engine)
        }

        /**
         * @inheritDoc
         */
        getEngine() {
            return Matter
        }

        /**
         * @inheritDoc
         */
        getBodies() {
            return Matter.Composite.allBodies(this.engine.world)
        }

        /**
         * @inheritDoc
         */
        getJoints() {
            return Matter.Composite.allConstraints(this.engine.world)
        }

        /**
         * @inheritDoc
         */
        newGroup() {
            return Matter.Body.nextGroup(true)
        }

        /**
         * @inheritDoc
         */
        updateCollisionFilters(entity) {
            const body = this.getBodyFromEntity(entity)
            body.collisionFilter = entity.collision
            return true
        }

        /**
         * @inheritDoc
         */
        updateJointPosition(entity) {
            const points = entity.points
            const entities = entity.entities
            const pointA = entity.toAbsolutePosition(points.a)
            const pointB = entity.toAbsolutePosition(points.b)
            if (entity.attached) {
                entities.a.movePointTo(pointA, pointB)
                entity.movePointTo(pointA, pointB)
                entity.updatePoints(pointB, { x: pointB.x + 1, y: pointB.y + 1 })
                return true
            }
            return false
        }

        /**
         * @inherit
         */
        applyForce(body, entity) {
            const { force, rotationConstraint } = entity.physics
            const { min: minRotation, max: maxRotation } = rotationConstraint
            if (maxRotation && entity.rotation > maxRotation) {
                this.getEngine().Body.setAngle(body, maxRotation)
            } else if (minRotation && entity.rotation < minRotation) {
                this.getEngine().Body.setAngle(body, minRotation)
            } else {
                this.getEngine().Body.applyForce(body, entity.getForcePosition(), force)
            }
        }

        /**
         * @inherit
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