define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class CircleEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.CIRCLE
            this.center = null
            this.radius = 0
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.x) }
            if (this.clearBuffer()) {
                return this.generate()
            }
            return false
        }

        /**
         * Generate mesh for a circle
         */
        generate() {
            const { width, height } = this.getLargestRectangle(this.rotation, this.size)
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext('2d')
            const centerX = sw / 2
            const centerY = sh / 2
            this.center = { x: centerX, y: centerY }
            this.radius = Math.abs(sw / 2 - 1)
            const fillColor = this.getFillColor()
            const color = this.getColor()
            context.strokeStyle = color
            if (fillColor) {
                context.fillStyle = fillColor
            }
            context.lineWidth = 1
            context.translate(width / 2, height / 2)
            context.rotate(this.rotation)
            context.translate(-centerX, -centerY)
            context.ellipse(centerX, centerY, this.radius, this.radius, 0, 0, 2 * Math.PI)
            context.stroke()
            if (fillColor) {
                context.fill()
            }
            return this.updateMeshFromContext(context)
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {Float} angleRadian 
         * @param {Object} size 
         */
        getLargestRectangle(angleRadian, size) {
            return size
        }

        /**
         * @inheritdoc
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.mesh.size.width / 2,
                y: this.position.y + this.mesh.size.height / 2
            }
        }

        /**
         * @inheritdoc
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.mesh.size.width / 2,
                y: position.y - this.mesh.size.height / 2
            }
        }

    }

    return CircleEntity
})