define(function (require) {
    
    const Shape = require('./Shape.js')

    class PolyShape extends Shape {

        get(entity, bodies){
            const centerPosition = entity.toCenterPosition()
            return bodies.fromVertices(centerPosition.x, centerPosition.y, entity.points)
        }

    }

    return PolyShape
})