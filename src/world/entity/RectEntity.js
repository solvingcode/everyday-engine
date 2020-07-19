define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class RectEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.clearBuffer()) {
                this.generate()
            }
        }

        /**
         * Generate pixels for the rect
         */
        generate() {
            const { width, height } = this.getLargestRectangle(this.rotation, this.size)
            const center = { x: this.size.width / 2, y: this.size.height / 2 }
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.translate(width / 2, height / 2)
            context.rotate(this.rotation)
            context.translate(-center.x, -center.y)
            context.rect(0, 0, this.size.width, this.size.height)
            context.stroke()
            this.setPixelsByContext(context)
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
            const minX = rotatedPoints.reduce((minX, current) => ((minX > current.x && current.x) || minX), rotatedPoints[0].x)
            const maxX = rotatedPoints.reduce((maxX, current) => ((maxX < current.x && current.x) || maxX), rotatedPoints[0].x)
            const minY = rotatedPoints.reduce((minY, current) => ((minY > current.y && current.y) || minY), rotatedPoints[0].y)
            const maxY = rotatedPoints.reduce((maxY, current) => ((maxY < current.y && current.y) || maxY), rotatedPoints[0].y)
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

    return RectEntity
})