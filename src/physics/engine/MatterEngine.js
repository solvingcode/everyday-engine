define(function (require) {

    const PhysicsEngine = require('./PhysicsEngine.js')
    const Entity = require('../../entity/Entity.js')
    const PlatformEntity = require('../../world/entity/PlatformEntity.js')

    class MatterEngine extends PhysicsEngine {

        constructor() {
            super()
            this.engine = Matter.Engine.create()
        }

        /**
         * Add physics to the entity
         */
        add(entity) {
            var entityEngine = null
            if (entity.shape === Entity.shapes.RECT) {
                entityEngine = Matter.Bodies.rectangle(
                    entity.position.x,
                    entity.position.y,
                    entity.size.width,
                    entity.size.height,
                    { isStatic: entity instanceof PlatformEntity }
                )
            }
            if (entityEngine) {
                Matter.World.add(this.engine.world, entityEngine)
            }
        }

        /**
         * Run the physics engine
         */
        run() {
            Matter.Engine.run(this.engine)
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