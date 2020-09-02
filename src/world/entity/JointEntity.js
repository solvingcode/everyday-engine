define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const EntitySelector = require('../manager/EntitySelector.js')

    class JointEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.LINE
            this.points = { a: null, b: null }
            this.entities = { a: null, b: null }
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            if (this.generatePoints(dragDistance)) {
                this.setConstraintEntites()
                return this.generate()
            }
            return false
        }

        /**
         * Generate points from drag distance
         */
        generatePoints(dragDistance) {
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                if (dragDistance.x * dragDistance.y < 0) {
                    this.points = { a: { x: this.size.width, y: 0 }, b: { x: 0, y: this.size.height } }
                } else {
                    this.points = { a: { x: 0, y: 0 }, b: { x: this.size.width, y: this.size.height } }
                }
                return true
            }
            return false
        }

        /**
         * Generate mesh for the line
         */
        generate() {
            const x0 = this.points.a.x, y0 = this.points.a.y
            const x1 = this.points.b.x, y1 = this.points.b.y
            const canvas = new OffscreenCanvas(this.size.width, this.size.height)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
            context.stroke()
            return this.updateMeshFromContext(context)
        }

        /**
         * Find related entities using point a and b, and attach them to the joint
         */
        setConstraintEntites() {
            const entitySelector = EntitySelector.get()
            this.entities.a = entitySelector.get(this.toAbsolutePosition(this.points.a))
            this.entities.b = entitySelector.get(this.toAbsolutePosition(this.points.b))
            if (this.entities.a instanceof JointEntity) {
                this.entities.a = null
            }
            if (this.entities.b instanceof JointEntity) {
                this.entities.b = null
            }
        }

        /**
         * Update points (A, B) from an absolute positions
         * @param {Object} point 
         */
        updatePoints(pointA, pointB) {
            const dragDistance = { x: parseInt(pointB.x - pointA.x), y: parseInt(pointB.y - pointA.y) }
            if (this.generatePoints(dragDistance) && this.clearBuffer()) {
                this.generate()
            }
        }

        /**
         * @inherit
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.mesh.size.width / 2,
                y: this.position.y + this.mesh.size.height / 2
            }
        }

        /**
         * @inherit
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.mesh.size.width / 2,
                y: position.y - this.mesh.size.height / 2
            }
        }

    }

    return JointEntity
})