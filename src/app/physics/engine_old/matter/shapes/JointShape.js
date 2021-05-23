import Shape from '../../Shape.js'

/**
 * Joint Shape class
 * Define a Shape for AttachEntity type
 */
class JointShape extends Shape {

    /**
     * @override
     */
    generate(entity, world) {
        const engine = this.getEngine()
        entity.attached && this.addGroup(entity, world)
        return engine.Constraint.create(this.getConstraint(entity, world))
    }

    /**
     * @param {EntityMotion} entity
     * @param {World} world
     * @return {Object}
     */
    getConstraint(entity, world) {
        const {vertices} = entity
        const entityA = entity.getLinkedEntityAt(0, world)
        const entityB = entity.getLinkedEntityAt(1, world)
        const bodyA = entityA && this.getBodyFromEntity(entityA)
        const bodyB = entityB && this.getBodyFromEntity(entityB)
        const pointA = entityA ? entityA.getRelativeCenterPosition(entity, vertices[0]) : entity.fromRelativePosition(vertices[0])
        const pointB = entityB ? entityB.getRelativeCenterPosition(entity, vertices[1]) : entity.fromRelativePosition(vertices[1])
        const {
            stiffness,
            angularStiffness,
            angleA, angleB
        } = entity.physics
        if ((entityA && !bodyA) || (entityB && !bodyB)) {
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
     * @param {World} world
     */
    addGroup(entity, world) {
        const entityA = entity.getLinkedEntityAt(0, world)
        const entityB = entity.getLinkedEntityAt(1, world)

        const collisionGroup = entity.collision.group ||
            (entityA && entityA.collision.group) ||
            (entityB && entityB.collision.group) ||
            this.physicEngine.newGroup()

        entity.collision.group = collisionGroup
        if(entityA){
            entityA.collision.group = collisionGroup
        }
        if(entityB){
            entityB.collision.group = collisionGroup
        }
    }

}

export default JointShape