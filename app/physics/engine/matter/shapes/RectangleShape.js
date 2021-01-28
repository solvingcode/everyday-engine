import Shape from '../../Shape.js'

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
                density: entity.physics.density,
                angle: entity.rotation
            }
        )
    }

}

export default RectangleShape