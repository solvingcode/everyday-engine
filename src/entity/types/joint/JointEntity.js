define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const AttachEntity = require('./AttachEntity.js')

    /**
     * @property {Vector[]} points relative positions for entities A & B
     */
    class JointEntity extends AttachEntity {

        constructor(props) {
            props.style = props.style || { color: '#0000FF' }
            super(props)
            this.shape = EntityMotion.shapes.ATTACH
            this.points = { a: null, b: null }
            this.entities = { a: null, b: null }
            this.attached = false
        }

        /**
         * @override
         */
        init() {
            const dragDistance = this.setMeshPositionByDragDistance()
            return this.generatePoints(dragDistance) && this.setConstraintEntities()
        }

        /**
         * Calculate the size of the canvas using the drag distance
         * @param {Object} dragDistance 
         */
        calculateSize(dragDistance) {
            return { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
        }

        /**
         * Generate points from drag distance
         */
        generatePoints(dragDistance) {
            this.size = this.calculateSize(dragDistance)
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                const pointX = Math.abs(dragDistance.x)
                const pointY = Math.abs(dragDistance.y)
                if (dragDistance.x * dragDistance.y < 0) {
                    this.points = { a: { x: pointX, y: 0 }, b: { x: 0, y: pointY } }
                } else {
                    this.points = { a: { x: 0, y: 0 }, b: { x: pointX, y: pointY } }
                }
                if (dragDistance.y < 0) {
                    const pointPermut = this.points.a
                    this.points.a = this.points.b
                    this.points.b = pointPermut
                }
                return this.points.a && this.points.b
            }
            return false
        }

        /**
         * Generate mesh for the line
         */
        generateMesh() {
            const x0 = this.points.a.x, y0 = this.points.a.y
            const x1 = this.points.b.x, y1 = this.points.b.y
            const canvas = new OffscreenCanvas(this.size.width, this.size.height)
            const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
            this.drawLine(context, { x: x0, y: y0 }, { x: x1, y: y1 })
            return this.updateMeshFromContext(context)
        }

        /**
         * Draw the shape to the offscreen context
         * @param {CanvasRenderingContext2D} context 
         * @param {Object} pointFrom 
         * @param {Object} pointTo 
         */
        drawLine(context, pointFrom, pointTo) {
            context.strokeStyle = this.style.color
            context.beginPath()
            context.moveTo(pointFrom.x, pointFrom.y)
            context.lineTo(pointTo.x, pointTo.y)
            context.stroke()
        }

        /**
         * Find related entities using point a and b, and attach them to the joint
         */
        setConstraintEntities() {
            const entitySelector = EntitySelector.get()
            this.entities.a = entitySelector.get(this.toAbsolutePosition(this.points.a), AttachEntity)
            this.entities.b = entitySelector.getAll(this.toAbsolutePosition(this.points.b), AttachEntity)
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
         * Update points (A, B) from an absolute positions
         * @param {Vector} pointA absolute position
         * @param {Vector} pointB absolute position
         */
        updatePoints(pointA, pointB) {
            const dragDistance = { x: Math.floor(pointB.x - pointA.x), y: Math.floor(pointB.y - pointA.y) }
            if (this.generatePoints(dragDistance) && this.clearBuffer()) {
                let newX = pointA.x, newY = pointA.y
                if (dragDistance.x <= 0) {
                    newX = pointB.x
                }
                if (dragDistance.y <= 0) {
                    newY = pointB.y
                }
                this.setPosition({ x: parseInt(newX), y: parseInt(newY) })
                this.generate()
            }
        }

        getLineWidth() {
            return Math.abs(this.points.b.x - this.points.a.x)
        }

        getLineHeight() {
            return Math.abs(this.points.b.y - this.points.a.y)
        }

        /**
         * @inherit
         */
        toCenterPosition() {
            return {
                x: this.mesh.position.x + this.getLineWidth() / 2,
                y: this.mesh.position.y + this.getLineHeight() / 2
            }
        }

        /**
         * @inherit
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.getLineWidth() / 2,
                y: position.y - this.getLineHeight() / 2
            }
        }

    }

    return JointEntity
})