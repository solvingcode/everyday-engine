define(function (require) {

    const Shape = require('./Shape.js')

    /**
     * Joint Shape class
     * Define a Shape for AttachEntity type
     */
    class JointShape extends Shape {

        /**
         * @inheritdoc
         */
        get(entity) {
            const engine = this.getEngine()
            const points = entity.points
            const entities = entity.entities
            const bodyA = this.getBodyFromEntity(entities.a)
            const bodyB = this.getBodyFromEntity(entities.b)
            const pointA = entities.a.getRelativeCenterPosition(entity, points.a)
            const pointB = entities.b.getRelativeCenterPosition(entity, points.b)
            const stiffness = 1
            if (!bodyA || !bodyB) {
                throw new ReferenceError('Body not yet created or entity not founded')
            }
            entity.attached && this.addGroup(entity)
            return engine.Constraint.create({ bodyA, pointA, bodyB, pointB, stiffness })
        }

        addGroup(entity) {
            const collisionGroup = entity.collision.group ||
                entity.entities.a.collision.group ||
                entity.entities.b.collision.group ||
                this.physicEngine.newGroup()

            entity.collision.group = collisionGroup
            entity.entities.a.collision.group = collisionGroup
            entity.entities.b.collision.group = collisionGroup
        }

    }

    return JointShape
})