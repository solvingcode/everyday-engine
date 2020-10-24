define(function (require) {

    const PhysicsEngine = require('../PhysicsEngine.js')
    const ShapeLoader = require('./ShapeLoader.js')

    /**
     * Matter Physics Engine class
     */
    class MatterEngine extends PhysicsEngine {

        constructor() {
            super()
        }

        /**
         * @inheritdoc
         */
        init() {
            this.engine = Matter.Engine.create()
            this.shapeLoader = new ShapeLoader(this)
        }

        /**
         * @inheritdoc
         */
        add(entity) {
            const shape = this.shapeLoader.load(entity)
            Matter.World.add(this.engine.world, shape)
        }

        /**
         * @inheritdoc
         */
        update(entity) {
            this.shapeLoader.update(entity)
        }

        /**
         * Run the physics engine
         */
        run() {
            Matter.Engine.run(this.engine)
        }

        /**
         * Stop the physics engine
         */
        stop() {
            Matter.World.clear(this.engine.world)
            Matter.Engine.clear(this.engine)
            this.engine = null
        }

        /**
         * @inheritdoc
         */
        getEngine() {
            return Matter
        }

        /**
         * @inheritdoc
         */
        getBodies() {
            return Matter.Composite.allBodies(this.engine.world)
        }

        /**
         * @inheritdoc
         */
        getJoints() {
            return Matter.Composite.allConstraints(this.engine.world)
        }

        /**
         * @inheritdoc
         */
        newGroup() {
            return Matter.Body.nextGroup(true)
        }

        /**
         * @inheritdoc
         */
        updateCollisionFilters(entity) {
            const body = this.getBodyFromEntity(entity)
            body.collisionFilter = entity.collision
            return true
        }

        /**
         * @inheritdoc
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
         * @inheritdoc
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

    }

    return MatterEngine
})