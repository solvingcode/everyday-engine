define(function (require) {

    const Shape = require('./Shape.js')

    class JointShape extends Shape {

        get(entity, bodies, constraint){
            const points = entity.points
            const entities = entity.entities
            const bodyA = this.getBodyFromEntity(entities.a)
            const bodyB = this.getBodyFromEntity(entities.b)
            const pointA = entities.a.toRelativeCenterPosition(entity.toAbsolutePosition(points.a))
            const pointB = entities.b.toRelativeCenterPosition(entity.toAbsolutePosition(points.b))
            return constraint.create({bodyA, pointA, bodyB, pointB})
        }

    }

    return JointShape
})