define(function (require) {

    const PhysicsEngine = require('../PhysicsEngine.js')
    const ShapeLoader = require('./ShapeLoader.js')

    class MatterEngine extends PhysicsEngine {

        constructor() {
            super()
        }

        init() {
            this.engine = Matter.Engine.create()
            this.shapeLoader = new ShapeLoader()
        }

        /**
         * Add physics to the entity
         */
        add(entity) {
            const shape = this.shapeLoader.load(entity, Matter.Bodies)
            Matter.World.add(this.engine.world, shape)
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
         * @Inherit
         */
        getBodies() {
            return Matter.Composite.allBodies(this.engine.world)
        }

    }

    return MatterEngine
})