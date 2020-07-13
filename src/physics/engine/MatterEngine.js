define(function (require) {

    const PhysicsEngine = require('./PhysicsEngine.js')
    const Entity = require('../../entity/Entity.js')
    const PlatformEntity = require('../../world/entity/PlatformEntity.js')

    class MatterEngine extends PhysicsEngine {

        constructor() {
            super()
        }

        init() {
            this.engine = Matter.Engine.create()
        }

        /**
         * Add physics to the entity
         */
        add(entity) {
            var entityEngine = null
            const centerPosition = entity.toCenterPosition()
            if (entity.shape === Entity.shapes.RECT) {
                entityEngine = Matter.Bodies.rectangle(
                    centerPosition.x,
                    centerPosition.y,
                    entity.size.width,
                    entity.size.height,
                    { isStatic: entity instanceof PlatformEntity }
                )
            } else if (entity.shape === Entity.shapes.ELLIPSE) {
                entityEngine = Matter.Bodies.circle(
                    entity.position.x,
                    entity.position.y,
                    entity.radius.x,
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