define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const PhysicsData = require('../project/data/PhysicsData.js')
    const MatterEngine = require('../physics/engine/matter/Engine.js')

    class Physics extends PhysicsData {

        constructor() {
            super()
            this.entityManager = EntityManager.get()
            this.physicsEngine = new MatterEngine()
            this.physicsEngine.setPhysicsManager(this)
            this.toRestart = false
            this.isRunning = false
        }

        /**
         * Update physics, and train AI
         * @param {AiEngine} aiEngine
         */
        update(aiEngine) {
            if (this.toRestart) {
                this.restart()
            } else {
                this.updateEntities()
                this.updateEngine(aiEngine)
            }
        }

        /**
         * Update entities props from Physics engine results
         */
        updateEntities() {
            const bodyEntities = this.entityManager.getBodyEntities()
            const jointEntites = this.entityManager.getAttachEntities()
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = bodyEntities[index]
                const {x, y} = entity.fromCenterPosition(body.position)
                const rotation = body.angle ? body.angle % (Math.PI * 2) : 0
                entity.setPosition({x: parseInt(x), y: parseInt(y)})
                entity.setRotationAndGenerate(Math.round(rotation * 100) / 100)
                entity.setVelocity(body.velocity)
                entity.setAngularVelocity(body.angularVelocity)
                this.entityManager.haveToDie(entity, this.physicsEngine)
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
         * @param {AiEngine} aiEngine
         * @TODO: updating the joint entities crash the physics, to be revisited
         */
        updateEngine(aiEngine) {
            this.entityManager.getAttachEntities().forEach(entity => {
                this.physicsEngine.update(entity)
            })
            this.entityManager.getBodyEntities().forEach(entity => {
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
         */
        getEntityById(entityId) {
            return this.entityManager.findById(entityId)
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
         */
        unload() {
            this.entityManager.entities.map(entity => entity.unloadPhysics(this.physicsEngine))
        }

        /**
         * Load the physics for entites
         */
        load() {
            return this.before() && this.setup() && this.after()
        }

        /**
         * Init the phyiscs for entities before loading
         */
        before() {
            const jointEntities = this.entityManager.getAttachEntities()
            jointEntities.map(entity => entity.updateJointPosition(this.physicsEngine))
            return true
        }

        /**
         * Setup the physics for entities
         */
        setup() {
            const bodyEntities = this.entityManager.getBodyEntities()
            const attachEntities = this.entityManager.getAttachEntities()
            bodyEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            attachEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            return true
        }

        /**
         * Complete the physics after setup
         */
        after() {
            const bodyEntities = this.entityManager.getBodyEntities()
            bodyEntities.map(entity => entity.updateCollisionFilters(this.physicsEngine))
            return true
        }

        /**
         * Run the physics
         */
        run() {
            this.unload()
            this.physicsEngine.init()
            this.load()
            this.physicsEngine.run()
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
         */
        restart() {
            this.stop()
            this.run()
            this.setToRestart(false)
        }

    }

    return Physics
})