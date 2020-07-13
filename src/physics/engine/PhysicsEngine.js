define(function () {

    class PhysicsEngine {

        constructor() {
            if (this.constructor === PhysicsEngine) {
                throw new TypeError('Abstract class PhysicsEngine cannot be instantiated directly')
            }
        }

        /**
         * Initialize the engine.
         */
        init() {
            throw new TypeError('"init" method must be implemented')
        }

        /**
         * Add physics to the entity.
         * @param {Entity} entity 
         */
        add(entity) {
            throw new TypeError('"add" method must be implemented')
        }

        /**
         * Run the physics engine.
         */
        run() {
            throw new TypeError('"run" method must be implemented')
        }

        /**
         * Stop the physics engine.
         */
        stop() {
            throw new TypeError('"stop" method must be implemented')
        }

        /**
         * Get bodies informations (position, ...)
         */
        getBodies() {
            throw new TypeError('"getBodies" method must be implemented')
        }

    }

    return PhysicsEngine
})