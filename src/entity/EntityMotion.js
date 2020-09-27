define(function (require) {

    const Entity = require('./Entity.js')
    const AppState = require('../core/AppState.js')
    const Vector = require('../core/Vector.js')

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
                speed: 0.7,
                gravity: 20
            }
            this.collision = { group: 0, category: 1, mask: 1 }
        }

        /**
         * Set velocity for physics props
         * @param {Object} velocity
         */
        setVelocity({ x, y }) {
            this.physics.velocity = new Vector({ x, y })
        }

        /**
         * Move the entity by velocity
         * @param {Object} velocity 
         */
        move(velocity) {
            const x = this.physics.velocity.x + velocity.x
            const y = this.physics.velocity.y + velocity.y
            this.physics.velocity = new Vector({ x, y })
        }

        /**
         * Update the entity props and the Mesh
         */
        update() {
            super.update()
        }

        /**
         * Move the entity by distance
         * @param {Object} distance 
         */
        moveDistance(distance) {
            this.setPosition({ x: this.position.x + distance.x, y: this.position.y + distance.y })
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
            return entityManager.getAttachedEntities(this)
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
         * @param {Object} point 
         */
        getRelativeCenterPosition(entity, point) {
            return this.toRelativeCenterPosition(entity.toAbsolutePosition(point))
        }

        /**
         * Update the style of the entity using data available on
         * tha application state (color, ...)
         */
        updateStyle() {
            this.props.style.fillColor = AppState.get().data.color
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