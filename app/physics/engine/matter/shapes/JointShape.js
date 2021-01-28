define(function (require) {

    import Shape from '../../Shape.js'

    /**
     * Joint Shape class
     * Define a Shape for AttachEntity type
     */
    class JointShape extends Shape {

        /**
         * @override
         */
        generate(entity) {
            const engine = this.getEngine()
            entity.attached && this.addGroup(entity)
            return engine.Constraint.create(this.getConstraint(entity))
        }

        /**
         * @param {EntityMotion} entity
         * @return {Object}
         */
        getConstraint(entity){
            const {vertices, entities} = entity
            const bodyA = entities.a && this.getBodyFromEntity(entities.a)
            const bodyB = entities.b && this.getBodyFromEntity(entities.b)
            const pointA = entities.a ? entities.a.getRelativeCenterPosition(entity, vertices[0]) : entity.fromRelativePosition(vertices[0])
            const pointB = entities.b ? entities.b.getRelativeCenterPosition(entity, vertices[1]) : entity.fromRelativePosition(vertices[1])
            const {
                stiffness,
                angularStiffness,
                angleA, angleB
            } = entity.physics
            if ((entities.a && !bodyA) || (entities.b && !bodyB)) {
                throw new ReferenceError('Body not yet created or entity not founded')
            }
            return {
                bodyA, pointA, bodyB, pointB,
                stiffness, angularStiffness, angleA, angleB
            }
        }

        /**
         * Add the constraint and the attached entities to the same collision group
         * (disable collision between attached bodies)
         * @param {Entity} entity
         */
        addGroup(entity) {
            const collisionGroup = entity.collision.group ||
                (entity.entities.a && entity.entities.a.collision.group) ||
                (entity.entities.b && entity.entities.b.collision.group) ||
                this.physicEngine.newGroup()

            entity.collision.group = collisionGroup
            entity.entities.a && (entity.entities.a.collision.group = collisionGroup)
            entity.entities.b && (entity.entities.b.collision.group = collisionGroup)
        }

    }

    export default JointShape
})