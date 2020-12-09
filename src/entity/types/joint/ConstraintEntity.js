define(function (require) {

    const Window = require('../../../core/Window.js')
    const AttachEntity = require('./AttachEntity.js')
    const Color = require('../../../utils/Color.js')

    /**
     * Define an entity which represent a physics constraint (mouse constraint, ...)
     * @property {{a: Entity, b: Entity}} entities
     * @property {{a: Vector, b: Vector}} points
     */
    class ConstraintEntity extends AttachEntity {

        constructor(props) {
            super(props)
            this.physics.stiffness = 0.1
            this.props.style = { color: `#${Color.fromArrayInt([this.id])}` }
            this.points = { a: null, b: null }
            this.entities = { a: null, b: null }
            this.attached = true
        }

        /**
         * @override
         */
        init() {
            this.generatePoints()
            const minPoint = this.getMinPoint()
            this.setMeshPosition({ x: minPoint.x, y: minPoint.y })
            this.calculateSize()
        }

        /**
         * Generate points from drag distance
         */
        generatePoints() {
            const window = Window.get()
            const position = window.mouse.position
            const currentPosition = window.mouse.currentPosition
            this.points = { a: position, b: currentPosition }
        }

        /**
         * Get the min point
         */
        getMinPoint() {
            const {a, b} = this.points
            const x = Math.min(a.x, b.x)
            const y = Math.min(a.y, b.y)
            return { x, y }
        }

        /**
         * Get the max point
         */
        getMaxPoint() {
            const {a, b} = this.points
            const x = Math.max(a.x, b.x)
            const y = Math.max(a.y, b.y)
            return { x, y }
        }

        /**
         * @override
         */
        drawContext(dataContext) {
            const {context} = dataContext
            const x0 = this.points.a.x, y0 = this.points.a.y
            const x1 = this.points.b.x, y1 = this.points.b.y
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
        }

        /**
         * @param {{a: Vector, b: Vector}} points
         */
        setPoints(points) {
            this.points = points
            this.calculateSize()
        }

        /**
         * @param {{a: Entity, b: Entity}} entities
         */
        setEntities(entities) {
            this.entities = entities
            this.calculateSize()
        }

        calculateSize(){
            const minPoint = this.getMinPoint()
            const maxPoint = this.getMaxPoint()
            this.size = { width: maxPoint.x - minPoint.x, height: maxPoint.y - minPoint.y }
        }

    }

    return ConstraintEntity
})