define(function (require) {

    const Entity = require('./Entity.js')

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
    }

    return EntityMotion
})