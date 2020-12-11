define(function (require) {

    const JointEntity = require('./JointEntity.js')
    const Color = require('../../../utils/Color.js')

    /**
     * Define an entity which represent a physics constraint (mouse constraint, ...)
     * @property {{a: Entity, b: Entity}} entities
     * @property {{a: Vector, b: Vector}} points
     * @property {{x: number, y: number}|null} pointConstraint the point inside the entity B which describe
     *                                         the trigger of the constraint (like mouse click inside the entity)
     */
    class ConstraintEntity extends JointEntity {

        constructor(props) {
            super(props)
            this.physics.stiffness = 0.1
            this.physics.angularStiffness = 1
            this.props.style = { color: `#${Color.fromArrayInt([this.id])}` }
            this.points = { a: {x: 0, y: 0}, b: {x: 0, y: 0} }
            this.entities = { a: null, b: null }
            this.attached = true
            this.clonable = false
            this.pointConstraint = null
        }

        /**
         * @override
         */
        setConstraintEntities() {
            return true
        }

        /**
         * @param {Entity} entityA
         * @param {Entity} entityB
         */
        setEntities(entityA, entityB){
            this.entities.a = entityA
            this.entities.b = entityB
        }

    }

    return ConstraintEntity
})