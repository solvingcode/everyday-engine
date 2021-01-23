define(function (require) {

    const Shape = require('../../Shape.js')

    /**
     * Circle Shape class
     * Define the shape for circles (CircleEntity)
     */
    class CircleShape extends Shape {

        /**
         * @override
         */
        generate(entity) {
            const centerPosition = entity.toCenterPosition()
            const engine = this.getEngine()
            return engine.Bodies.circle(
                centerPosition.x,
                centerPosition.y,
                entity.radius,
            )
        }

    }

    return CircleShape
})