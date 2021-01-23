define(function (require) {

    const Shape = require('../../Shape.js')

    class RectangleShape extends Shape {

        generate(entity, bodies){
            const centerPosition = entity.toCenterPosition()
            const maxRadiusSqr = Math.pow(Math.max(entity.radius.x, entity.radius.y), 2)
            const minRadiusSqr = Math.pow(Math.min(entity.radius.x, entity.radius.y), 2)
            const ellipseFunc = (x) => (
                Math.sqrt((maxRadiusSqr * minRadiusSqr - minRadiusSqr * Math.pow(x, 2)) / maxRadiusSqr)
            )
            let vertices = []
            for (let x = 0; x < entity.size.width; x += 1) {
                vertices.push({ x, y: Math.ceil(ellipseFunc(x - entity.size.width / 2) || 0) })
            }
            for (let x = entity.size.width - 2; x > 0; x -= 1) {
                vertices.push({ x, y: Math.ceil(ellipseFunc(x - entity.size.width / 2) || 0) * -1 })
            }
            return bodies.fromVertices(centerPosition.x, centerPosition.y, vertices)
        }

    }

    return RectangleShape
})