define(function (require) {

    const PhysicsData = require('../project/data/PhysicsData.js')
    const MatterEngine = require('../physics/engine/matter/Engine.js')

    class Physics extends PhysicsData {

        constructor() {
            super()
            this.physicsEngine = new MatterEngine()
            this.physicsEngine.setPhysicsManager(this)
            this.toRestart = false
            this.isRunning = false
        }

        /**
         * Update physics, and train AI
         * @param {World} world
         * @param {AiEngine} aiEngine
         */
        update(world, aiEngine) {
            if (this.toRestart) {
                this.restart(world)
            } else {
                this.updateEntities(world)
                this.updateEngine(world, aiEngine)
            }
        }

        /**
         * Update entities props from Physics engine results
         * @param {World} world
         */
        updateEntities(world) {
            const entityManager = world.getEntityManager()
            const bodyEntities = entityManager.getBodyEntities()
            const jointEntites = entityManager.getAttachEntities()
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = bodyEntities[index]
                const {x, y} = entity.fromCenterPosition(body.position)
                const rotation = body.angle ? body.angle % (Math.PI * 2) : 0
                entity.setPosition({x: parseInt(x), y: parseInt(y)})
                entity.setRotationAndGenerate(Math.round(rotation * 100) / 100)
                entity.setVelocity(body.velocity)
                entity.setAngularVelocity(body.angularVelocity)
                entityManager.haveToDie(entity, this.physicsEngine)
            })
            this.physicsEngine.getJoints().map((joint, index) => {
                const entity = jointEntites[index]
                const pointA = entity.entities.a ? entity.entities.a.fromRelativeCenterPosition(joint.pointA) : joint.pointA
                const pointB = entity.entities.b ? entity.entities.b.fromRelativeCenterPosition(joint.pointB) : joint.pointB
                entity.updatePoints(pointA, pointB)
            })
        }

        /**
         * Update the World using AI and physics Engine
         * @param {World} world
         * @param {AiEngine} aiEngine
         * @TODO: updating the joint entities crash the physics, to be revisited
         */
        updateEngine(world, aiEngine) {
            const entityManager = world.getEntityManager()
            entityManager.getAttachEntities().forEach(entity => {
                this.physicsEngine.update(entity)
            })
            entityManager.getBodyEntities().forEach(entity => {
                this.physicsEngine.update(entity)
            })
            this.physicsEngine.updateEngine()
            aiEngine && aiEngine.update()
        }

        /**
         * @param {AttachEntity} entity
         * @param {Constraint} constraint
         */
        updateConstraint(entity, constraint) {
            const shape = this.physicsEngine.findShapeFromEntity(entity)
            if (shape) {
                this.physicsEngine.updateConstraint(entity, constraint)
            } else {
                throw TypeError(`Shape not founded for the constraint entity ${entity.id}`)
            }
        }

        /**
         * Get the body phyiscs from the given entity
         * @param {Entity} entity
         */
        getBodyFromEntity(entity) {
            const shape = this.physicsEngine.findShapeFromEntity(entity)
            const bodies = this.physicsEngine.getBodies()
            const joints = this.physicsEngine.getJoints()
            if (!shape || (!bodies.includes(shape) && !joints.includes(shape))) {
                throw TypeError(`Shape not founded for the entity ${entity.id}`)
            }
            return shape
        }

        /**
         * Get an entity from an ID
         * @param {World} world
         * @param {number} entityId
         */
        getEntityById(world, entityId) {
            return world.getEntityManager().findById(entityId)
        }

        /**
         * Stop the engine
         */
        stop() {
            this.physicsEngine.stop()
            this.isRunning = false
        }

        /**
         * Unload the physics for entities
         * @param {World} world
         */
        unload(world) {
            world.getEntityManager().entities.map(entity => entity.unloadPhysics(this.physicsEngine))
        }

        /**
         * Load the physics for entities
         * @param {World} world
         */
        load(world) {
            return this.before(world) && this.setup(world) && this.after(world)
        }

        /**
         * Init the phyiscs for entities before loading
         * @param {World} world
         */
        before(world) {
            const jointEntities = world.getEntityManager().getAttachEntities()
            jointEntities.map(entity => entity.updateJointPosition(world, this.physicsEngine))
            return true
        }

        /**
         * Setup the physics for entities
         * @param {World} world
         */
        setup(world) {
            const entityManager = world.getEntityManager()
            const bodyEntities = entityManager.getBodyEntities()
            const attachEntities = entityManager.getAttachEntities()
            bodyEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            attachEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            return true
        }

        /**
         * Complete the physics after setup
         * @param {World} world
         */
        after(world) {
            const bodyEntities = world.getEntityManager().getBodyEntities()
            bodyEntities.map(entity => entity.updateCollisionFilters(this.physicsEngine))
            return true
        }

        /**
         * Run the physics
         * @param {World} world
         */
        run(world) {
            this.unload(world)
            this.physicsEngine.init()
            this.load(world)
            this.physicsEngine.run(world)
            this.isRunning = true
        }

        /**
         * Remove an entity from physics engine
         * @param {Entity} entity
         */
        loadEntity(entity) {
            if (this.isRunning) {
                entity.loadPhysics(this.physicsEngine)
            }
        }

        /**
         * Remove an entity from physics engine
         * @param {Entity} entity
         */
        unloadEntity(entity) {
            if (this.isRunning) {
                entity.unloadPhysics(this.physicsEngine)
            }
        }

        /**
         * Flag the physics to restart
         * @param {Boolean} toRestart
         */
        setToRestart(toRestart) {
            this.toRestart = toRestart
        }

        /**
         * Restart the engine
         * @param {World} world
         */
        restart(world) {
            this.stop()
            this.run(world)
            this.setToRestart(false)
        }

    }

    return Physics
})