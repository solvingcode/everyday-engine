define(function (require) {

    const PlatformEntity = require('../../../../world/entity/PlatformEntity.js')
    const Shape = require('./Shape.js')

    /**
     * Rectangle Shape class
     * Define the shape for rectangles (RectEntity)
     */
    class RectangleShape extends Shape {

        /**
         * @inheritdoc 
         */
        generate(entity) {
            const centerPosition = entity.toCenterPosition()
            const engine = this.getEngine()
            return engine.Bodies.rectangle(
                centerPosition.x,
                centerPosition.y,
                entity.size.width,
                entity.size.height,
                { isStatic: entity instanceof PlatformEntity }
            )
        }

    }

    return RectangleShape
})