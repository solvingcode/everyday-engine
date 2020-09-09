define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const EntitySelector = require('../manager/EntitySelector.js')
    const AttachEntity = require('./AttachEntity.js')

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
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            if (this.generatePoints(dragDistance)) {
                return this.setConstraintEntites() && this.generate()
            }
            return false
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
                return true
            }
            return false
        }

        /**
         * Generate mesh for the line
         */
        generate() {
            if (!this.isGenerateDisabled()) {
                const x0 = this.points.a.x, y0 = this.points.a.y
                const x1 = this.points.b.x, y1 = this.points.b.y
                const canvas = new OffscreenCanvas(this.size.width, this.size.height)
                const context = canvas.getContext('2d')
                this.drawLine(context, { x: x0, y: y0 }, { x: x1, y: y1 })
                return this.updateMeshFromContext(context)
            } else {
                return false
            }
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
        setConstraintEntites() {
            const entitySelector = EntitySelector.get()
            this.entities.a = entitySelector.get(this.toAbsolutePosition(this.points.a), AttachEntity)
            this.entities.b = entitySelector.get(this.toAbsolutePosition(this.points.b), AttachEntity)
            if (this.entities.a instanceof AttachEntity) {
                this.entities.a = null
            }
            if (this.entities.b instanceof AttachEntity) {
                this.entities.b = null
            }
            if (this.entities.a === this.entities.b) {
                this.entities.b = null
            }
            return this.entities.a && this.entities.b
        }

        /**
         * Update points (A, B) from an absolute positions
         * @param {Object} point 
         */
        updatePoints(pointA, pointB) {
            const dragDistance = { x: parseInt(pointB.x - pointA.x), y: parseInt(pointB.y - pointA.y) }
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
         * @inheritdoc
         */
        toCenterPosition() {
            return {
                x: this.mesh.position.x + this.getLineWidth() / 2,
                y: this.mesh.position.y + this.getLineHeight() / 2
            }
        }

        /**
         * @inheritdoc
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