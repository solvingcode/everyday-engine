define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const EntitySelector = require('../manager/EntitySelector.js')
    const AttachEntity = require('./AttachEntity.js')

    class AttachPointEntity extends AttachEntity {

        constructor(props) {
            props.style = props.style || { color: '#0000FF' }
            super(props)
            this.shape = EntityMotion.shapes.ATTACH
            this.points = { a: null, b: null }
            this.entities = { a: null, b: null }
            this.attached = true
        }

        /**
         * @inheritdoc
         */
        build() {
            this.setMeshPositionByDragDistance()
            if (this.generatePoints()) {
                return this.setConstraintEntites() && this.generate()
            }
            return false
        }

        /**
         * Calculate the size of the canvas using the drag distance
         * @param {Object} dragDistance 
         */
        calculateSize() {
            return { width: 10, height: 10 }
        }

        /**
         * Generate points from drag distance
         * @param {Object} position
         */
        generatePoints() {
            this.size = this.calculateSize()
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                this.points = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } }
                return true
            }
            return false
        }

        /**
         * Generate mesh for the line
         */
        generate() {
            if (!this.isGenerateDisabled()) {
                const canvas = new OffscreenCanvas(this.size.width, this.size.height)
                const context = canvas.getContext('2d')
                this.drawCircle(context)
                return this.updateMeshFromContext(context)
            } else {
                return false
            }
        }

        /**
         * Draw the shape to the offscreen context
         * @param {CanvasRenderingContext2D} context 
         * @param {Object} point
         */
        drawCircle(context) {
            context.strokeStyle = this.style.color
            const centerX = this.size.width / 2
            const centerY = this.size.height / 2
            context.beginPath()
            context.ellipse(centerX, centerY, this.size.width / 2, this.size.height / 2, 0, 0, 2 * Math.PI)
            context.stroke()
        }

        /**
         * @inheritdoc
         */
        setMeshPosition(position) {
            super.setMeshPosition({ x: position.x - this.size.width / 2, y: position.y - this.size.height / 2 })
        }

        /**
         * Find related entities using point a and b, and attach them to the joint
         */
        setConstraintEntites() {
            const entitySelector = EntitySelector.get()
            const entities = entitySelector.getAll(this.toAbsolutePosition(this.points.a), AttachEntity)
            this.entities.a = entities && entities[0]
            this.entities.b = entities && entities[1]
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
            if (this.generatePoints(pointA) && this.clearBuffer()) {
                this.setPosition({ x: parseInt(pointA.x), y: parseInt(pointA.y) })
                this.generate()
            }
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

    return AttachPointEntity
})