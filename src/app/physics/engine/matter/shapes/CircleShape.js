import Shape from '../../Shape.js'

/**
 * Circle Shape class
 * Define the shape for circles (CircleEntity)
 */
class CircleShape extends Shape {

    /**
     * @override
     */
    generate(entity, world) {
        const centerPosition = entity.toCenterPosition()
        const engine = this.getEngine()
        return engine.Bodies.circle(
            centerPosition.x,
            centerPosition.y,
            entity.radius,
        )
    }

}

export default CircleShape