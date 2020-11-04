define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class EllipseEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.ELLIPSE
            this.center = null
            this.radius = {x: 0, y: 0}
        }

        /**
         * @inherit
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.clearBuffer()) {
                this.generate()
            }
        }

        /**
         * Generate mesh for a ellipse
         */
        generate() {
            const { width, height } = this.getLargestRectangle(this.rotation, this.size)
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
            const centerX = sw / 2
            const centerY = sh / 2
            const radiusX = sw / 2
            const radiusY = sh / 2
            this.center = { x: centerX, y: centerY }
            this.radius = { x: radiusX, y: radiusY }
            context.beginPath()
            context.translate(width / 2, height / 2)
            context.rotate(this.rotation)
            context.translate(-centerX, -centerY)
            context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI)
            context.stroke()
            this.updateMeshFromContext(context)
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {Float} angleRadian 
         * @param {Object} size 
         */
        getLargestRectangle(angleRadian, size) {
            const cosA = Math.cos(angleRadian)
            const sinA = Math.sin(angleRadian)
            const points = [
                { x: 0, y: 0 },
                { x: size.width, y: 0 },
                { x: 0, y: size.height },
                { x: size.width, y: size.height }
            ]
            const rotatedPoints = points.map(({ x, y }) => ({
                x: x * cosA - y * sinA,
                y: x * sinA + y * cosA
            }))
            const minX = rotatedPoints.reduce((mnX, current) => ((mnX > current.x && current.x) || mnX), rotatedPoints[0].x)
            const maxX = rotatedPoints.reduce((mxX, current) => ((mxX < current.x && current.x) || mxX), rotatedPoints[0].x)
            const minY = rotatedPoints.reduce((mnY, current) => ((mnY > current.y && current.y) || mnY), rotatedPoints[0].y)
            const maxY = rotatedPoints.reduce((mxY, current) => ((mxY < current.y && current.y) || mxY), rotatedPoints[0].y)
            return {
                width: Math.ceil(maxX - minX),
                height: Math.ceil(maxY - minY)
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

    return EllipseEntity
})