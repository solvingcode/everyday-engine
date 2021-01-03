define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const AttachEntity = require('./AttachEntity.js')
    const Vector = require('../../../utils/Vector.js')

    /**
     * @property {Vector[]} vertices relative positions for entities A & B
     */
    class JointEntity extends AttachEntity {

        constructor(props = {}) {
            props.style = props.style || {color: '#0000FF'}
            super(props)
            this.shape = EntityMotion.shapes.ATTACH
            this.vertices = [null, null]
            this.entities = {a: null, b: null}
            this.attached = false
        }

        /**
         * @override
         */
        init(world) {
            const dragDistance = this.setMeshPositionByDragDistance()
            return this.generatePoints(dragDistance) && this.setConstraintEntities(world)
        }

        /**
         * Calculate the size of the canvas using the drag distance
         * @param {Object} dragDistance
         */
        calculateSize(dragDistance) {
            return {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)}
        }

        /**
         * Generate vertices from drag distance
         */
        generatePoints(dragDistance) {
            this.size = this.calculateSize(dragDistance)
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                const pointX = Math.abs(dragDistance.x)
                const pointY = Math.abs(dragDistance.y)
                if (dragDistance.x * dragDistance.y < 0) {
                    this.vertices = [new Vector({x: pointX, y: 0}), new Vector({x: 0, y: pointY})]
                } else {
                    this.vertices = [new Vector({x: 0, y: 0}), new Vector({x: pointX, y: pointY})]
                }
                if (dragDistance.y < 0) {
                    const point = this.vertices[0]
                    this.vertices[0] = this.vertices[1]
                    this.vertices[1] = point
                }
                return this.vertices[0]  && this.vertices[1]
            }
            return false
        }

        /**
         * @override
         */
        drawContext(dataContext) {
            const {context} = dataContext
            const x0 = this.vertices[0].x, y0 = this.vertices[0].y
            const x1 = this.vertices[1].x, y1 = this.vertices[1].y
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
        }

        /**
         * Find related entities using point a and b, and attach them to the joint
         */
        setConstraintEntities(world) {
            const entitySelector = EntitySelector.get()
            this.entities.a = entitySelector.get(world, this.toAbsolutePosition(this.vertices[0]), AttachEntity)
            this.entities.b = entitySelector.getAll(world, this.toAbsolutePosition(this.vertices[1]), AttachEntity)
                .find(entity => entity !== this.entities.a)
            if (this.entities.a instanceof AttachEntity) {
                this.entities.a = null
            }
            if (this.entities.b instanceof AttachEntity) {
                this.entities.b = null
            }
            if (this.entities.a === this.entities.b) {
                this.entities.b = null
            }

            this.entities.a && (this.entities.a.attachedEntities = null)
            this.entities.b && (this.entities.b.attachedEntities = null)

            return this.entities.a || this.entities.b
        }

        /**
         * Update vertices (A, B) from an absolute positions
         * @param {Vector} pointA absolute position
         * @param {Vector} pointB absolute position
         */
        updatePoints(pointA, pointB) {
            const dragDistance = {x: Math.floor(pointB.x - pointA.x), y: Math.floor(pointB.y - pointA.y)}
            if (this.generatePoints(dragDistance) && this.clearBuffer()) {
                let newX = pointA.x, newY = pointA.y
                if (dragDistance.x <= 0) {
                    newX = pointB.x
                }
                if (dragDistance.y <= 0) {
                    newY = pointB.y
                }
                this.setPosition({x: parseInt(newX), y: parseInt(newY)})
            }
        }

        getLineWidth() {
            return Math.abs(this.vertices[1].x - this.vertices[0].x)
        }

        getLineHeight() {
            return Math.abs(this.vertices[1].y - this.vertices[0].y)
        }

        /**
         * @override
         */
        toCenterPosition() {
            return {
                x: this.mesh.position.x + this.getLineWidth() / 2,
                y: this.mesh.position.y + this.getLineHeight() / 2
            }
        }

        /**
         * @override
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.getLineWidth() / 2,
                y: position.y - this.getLineHeight() / 2
            }
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

    return JointEntity
})