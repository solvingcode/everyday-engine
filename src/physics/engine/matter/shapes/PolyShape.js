define(function (require) {
    
    const Shape = require('./Shape.js')

    class PolyShape extends Shape {

        get(entity, bodies){
            const centerPosition = entity.toCenterPosition()
            bodies.fromVertices(centerPosition.x, centerPosition.y, entity.points)
        }

    }

    return PolyShape
})