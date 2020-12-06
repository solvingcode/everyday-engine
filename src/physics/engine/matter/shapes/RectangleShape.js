define(function (require) {

    const PlatformEntity = require('../../../../entity/types/PlatformEntity.js')
    const Shape = require('../../Shape.js')

    /**
     * Rectangle Shape class
     * Define the shape for rectangles (RectEntity)
     */
    class RectangleShape extends Shape {

        /**
         * @override
         */
        generate(entity) {
            const centerPosition = entity.toCenterPosition()
            const engine = this.getEngine()
            return engine.Bodies.rectangle(
                centerPosition.x,
                centerPosition.y,
                entity.size.width,
                entity.size.height,
                {
                    isStatic: (entity instanceof PlatformEntity),
                    density: entity.physics.density 
                }
            )
        }

    }

    return RectangleShape
})