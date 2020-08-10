define(function (require) {

    const PlatformEntity = require('../../../../world/entity/PlatformEntity.js')
    const Shape = require('./Shape.js')

    class RectangleShape extends Shape {

        get(entity, bodies){
            const centerPosition = entity.toCenterPosition()
            return bodies.rectangle(
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