define(function (require) {

    const Shape = require('./Shape.js')

    class CircleShape extends Shape {

        get(entity, bodies){
            const centerPosition = entity.toCenterPosition()
            return bodies.circle(
                centerPosition.x,
                centerPosition.y,
                entity.radius,
            )
        }

    }

    return CircleShape
})