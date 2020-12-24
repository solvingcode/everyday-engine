define(function (require) {

    const Entity = require('./Entity.js')
    const AppState = require('../state/AppState.js')
    const Vector = require('../utils/Vector.js')

    /**
     * Abstract EntityMotion class
     * @abstract
     * @todo Refactor collision properties
     */
    class EntityMotion extends Entity {
        constructor(props) {
            super(props)
            if (this.constructor === EntityMotion) {
                throw new TypeError('Abstract class EntityMotion cannot be instantiated directly')
            }
            this.physics = {
                velocity: new Vector({ x: 0, y: 0 }),
                angularVelocity: 0,
                speed: 0.7,
                density: 0.001,
                force: { x: 0, y: 0 },
                static: false,
                motion: true,
                rotationConstraint: {
                    min: -Math.PI * 2,
                    max: Math.PI * 2
                },
                ...props.physics
            }
            this.condition = {
                die: {
                    collisionWith: null
                }
            }
            this.collision = { group: 0, category: 1, mask: 1 }
            this.die = false
            this.controlled = false
            this.visible = true
        }

        /**
         * @return {boolean}
         */
        isStatic() {
            return this.physics.static
        }

        /**
         * If the entity is static, is automatically motionless
         * @param {boolean} isStatic
         */
        setStatic(isStatic) {
            this.physics.static = isStatic
            isStatic && this.setMotion(false)
        }

        /**
         * @return {boolean}
         */
        isMotion() {
            return this.physics.motion
        }

        /**
         * @param {boolean} isMotion
         */
        setMotion(isMotion) {
            this.physics.motion = isMotion
            isMotion && this.setStatic(false)
        }

        /**
         * Is the entity controlled
         * @return {boolean}
         */
        isControlled() {
            return this.controlled
        }

        /**
         * Set the controlled flag
         * @param {boolean} value
         */
        setControlled(value) {
            this.controlled = value
        }

        /**
         * Set velocity for physics props
         * @param {Object} velocity
         */
        setVelocity({ x, y }) {
            this.physics.velocity = new Vector({ x, y })
        }

        /**
         * Set the force for physics props
         * @param {Vector} force
         */
        setForce(force) {
            this.physics.force = force
        }

        /**
         * Set angular velocity for physics props
         * @param {Object} velocity
         */
        setAngularVelocity(velocity) {
            this.physics.angularVelocity = velocity
        }

        /**
         * Is the entity is static
         */
        getRotationConstraint() {
            return this.physics.rotationConstraint
        }

        /**
         * Get condition for dying (collision with another entity)
         */
        getDieCondition() {
            return this.condition.die.collisionWith
        }

        /**
         * Set condition for dying (collision with another entity)
         */
        setDieCondition(entityId) {
            this.condition.die.collisionWith = entityId
        }

        /**
         * Decide if the entity have to die
         * @param {PhysicsEngine} physicsEngine 
         */
        haveToDie(physicsEngine) {
            const entityId = this.getDieCondition()
            this.die |= entityId && physicsEngine.isCollide(this.getWorldId(), entityId)
        }

        /**
         * Is the entity dead
         */
        isDead() {
            return this.die
        }

        /**
         * Set the die flag
         * @param {Boolean} die 
         */
        setDie(die) {
            this.die = die
        }

        /**
         * Get the WorldId (can be used by Engines to apply same 
         * conditions for entities with th same worldId)
         * @return {number}
         */
        getWorldId() {
            return this.worldId || this.id
        }

        /**
         * Set the static flag
         * @param {number} min
         * @param {number} max
         */
        setRotationConstraint({ min, max }) {
            const constraint = this.getRotationConstraint()
            min && (constraint.min = min)
            max && (constraint.max = max)
            this.physics.rotationConstraint = constraint
        }

        /**
         * Get the force position (center of the entity by default)
         */
        getForcePosition() {
            return new Vector({ x: 0, y: 0 })
        }

        /**
         * Update the entity props and the Mesh
         */
        update() {
            super.update()
        }

        /**
         * Move the entity by distance related to a given point.
         * Move also attached entities
         * @param {EntityManager} entityManager
         * @param {Object} point relative position
         * @param {Object} target absolute position
         */
        moveRelativePointTo(entityManager, point, target) {
            const diffDistance = { x: target.x - this.position.x - point.x, y: target.y - this.position.y - point.y }
            this.setPosition({ x: this.position.x + diffDistance.x, y: this.position.y + diffDistance.y })
        }

        /**
         * Get attached entities
         * @param {EntityManager} entityManager
         */
        getAttachedEntities(entityManager) {
            if (this.attachedEntities === null) {
                this.attachedEntities = entityManager.getAttachedEntities(this)
            }
            return this.attachedEntities
        }

        /**
         * Update collision filters for the physic engine
         * @param {PhysicsEngine} physicsEngine 
         */
        updateCollisionFilters(physicsEngine) {
            if (this.isPhyiscsLoaded) {
                physicsEngine.updateCollisionFilters(this)
            }
        }

        /**
         * Set the collision group
         * @param {Number} collisionGroup 
         */
        setCollisionGroup(collisionGroup) {
            this.collision.group = collisionGroup
        }

        /**
         * Set the collision mask
         * @param {Number} collisionMask 
         */
        setCollisionMask(collisionMask) {
            this.collision.mask = collisionMask
        }

        /**
         * Update position for entities attached
         * @param {PhysicsEngine} physicsEngine 
         */
        updateJointPosition(physicsEngine) {
            if (!this.isPhyiscsLoaded) {
                physicsEngine.updateJointPosition(this)
            }
        }

        /**
         * Get the relative position of a point inside the current entity
         * from a relative point inside a given entity
         * @param {Entity} entity 
         * @param {{x: number, y: number}} point
         */
        getRelativeCenterPosition(entity, point) {
            return this.toRelativeCenterPosition(entity.toAbsolutePosition(point))
        }

        /**
         * Update the style of the entity using data available on
         * tha application state (color, ...)
         */
        updateStyle() {
            const {color} = AppState.get().data
            color && (this.props.style.fillColor = color)
            return this
        }

        getFillColor() {
            return this.style.fillColor || this.props.style.fillColor
        }

        getColor() {
            return this.style.color || this.props.style.color
        }

    }

    return EntityMotion
})