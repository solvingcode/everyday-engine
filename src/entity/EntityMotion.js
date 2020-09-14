define(function (require) {

    const Entity = require('./Entity.js')
    const AppState = require('../core/AppState.js')

    /**
     * Abstract EntityMotion class
     */
    class EntityMotion extends Entity {
        constructor(props) {
            super(props)
            if (this.constructor === EntityMotion) {
                throw new TypeError('Abstract class EntityMotion cannot be instantiated directly')
            }
            this.physics = {
                acceleration: { x: 0, y: 0 },
                velocity: { x: 0, y: 0 },
                speed: 0.7,
                gravity: 20
            }
            this.collision = { group: 0, category: 1, mask: 1 }
        }

        /**
         * Update the entity props and the Mesh
         */
        update() {
            super.update()
            this.physics.velocity.x += this.physics.acceleration.x
            this.physics.velocity.y += this.physics.acceleration.y
            this.physics.acceleration = { x: 0, y: 0 }
            this.position.x += this.physics.velocity.x
            this.position.y += this.physics.velocity.y
            this.physics.velocity.x *= 0.95
        }

        /**
         * Move the entity by direction
         * @param {int} direction 
         */
        move(direction) {
            var dx = 0, dy = 0
            if (direction & Math.pow(2, DIRECTION.UP)) {
                dy = 1
            }
            if (direction & Math.pow(2, DIRECTION.BOTTOM)) {
                dy = -1
            }
            if (direction & Math.pow(2, DIRECTION.LEFT)) {
                dx = -1
            }
            if (direction & Math.pow(2, DIRECTION.RIGHT)) {
                dx = 1
            }
            this.physics.acceleration.x = dx * this.physics.speed
            this.physics.acceleration.y = dy * this.physics.speed / 10
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
        updateStyle(){
            this.props.style.fillColor = AppState.get().data.color
            return this
        }

        getFillColor(){
            return this.style.fillColor || this.props.style.fillColor
        }

        getColor(){
            return this.style.color || this.props.style.color
        }

    }

    return EntityMotion
})