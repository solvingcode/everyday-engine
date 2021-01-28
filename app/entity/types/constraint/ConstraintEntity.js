define(function (require) {

    import JointEntity from './JointEntity.js'
    import Color from '../../../utils/Color.js'
    import Vector from '../../../utils/Vector.js'

    /**
     * Define an entity which represent a physics constraint (mouse constraint, ...)
     * @extends {JointEntity}
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
            this.vertices = [new Vector({x: 0, y: 0}), new Vector({x: 0, y: 0})]
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

    }

    export default ConstraintEntity
})