define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const Window = require('../../core/Window.js')

    class PolyEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.POLY
            this.points = []
            this.nbPoints = 0
            this.canvas = new OffscreenCanvas(1, 1)
        }

        /**
         * @inheritdoc
         */
        build() {
            this.setPoints()
            const minPoint = this.getMinPoint()
            this.setMeshPosition({ x: minPoint.x, y: minPoint.y })
            const maxPoint = this.getMaxPoint()
            this.size = { width: maxPoint.x - minPoint.x, height: maxPoint.y - minPoint.y }
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                this.generate()
            }
        }

        /**
         * Get the min point
         */
        getMinPoint() {
            const x = this.points.reduce((minX, point) => point.x < minX ? point.x : minX, 99999)
            const y = this.points.reduce((minY, point) => point.y < minY ? point.y : minY, 99999)
            return { x, y }
        }

        /**
         * Get the max point
         */
        getMaxPoint() {
            const x = this.points.reduce((maxX, point) => point.x > maxX ? point.x : maxX, 0)
            const y = this.points.reduce((maxY, point) => point.y > maxY ? point.y : maxY, 0)
            return { x, y }
        }

        /**
         * Add points to the poly based on the click position
         */
        setPoints() {
            const window = Window.get()
            const position = window.mouse.position
            const currentPosition = window.mouse.currentPosition
            if (!this.points.find(point => point.x === position.x && point.y === position.y)) {
                this.points[this.nbPoints] = position
                this.nbPoints = this.points.length
            } else {
                this.points[this.nbPoints] = currentPosition
            }
        }

        /**
         * Generate mesh for the poly
         */
        generate() {
            const { width, height } = this.getLargestRectangle(this.rotation)
            const center = { x: this.size.width / 2, y: this.size.height / 2 }
            this.canvas = new OffscreenCanvas(width, height)
            const context = this.canvas.getContext('2d')
            context.beginPath()
            context.translate(width / 2, height / 2)
            context.rotate(this.rotation)
            context.translate(-center.x, -center.y)
            this.drawPoints(context)
            context.stroke()
            this.updateMeshFromContext(context)
        }

        /**
         * Draw the points stored from mouse clicks
         * @param {OffscreenCanvasRenderingContext2D} context 
         */
        drawPoints(context) {
            const minPoint = this.getMinPoint()
            for (var iPoint in this.points) {
                const pointFrom = this.points[iPoint]
                const pointTo = this.points[parseInt(iPoint) + 1]
                if (pointTo) {
                    context.moveTo(pointFrom.x - minPoint.x, pointFrom.y - minPoint.y)
                    context.lineTo(pointTo.x - minPoint.x, pointTo.y - minPoint.y)
                }
            }
            context.closePath()
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {Float} angleRadian 
         * @param {Object} size 
         */
        getLargestRectangle(angleRadian) {
            const cosA = Math.cos(angleRadian)
            const sinA = Math.sin(angleRadian)
            const rotatedPoints = this.points.map(({ x, y }) => ({
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
         * Convert points to relative position of the Entity
         */
        convertPointToRelPosition() {
            const minPoint = this.getMinPoint()
            this.points = this.points.map(point => ({ x: point.x - minPoint.x, y: point.y - minPoint.y }))
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

        /**
         * Trigger other drawing instruction when the drawing is ended
         */
        close() {
            this.points.push(this.points[0])
            this.build()
            this.convertPointToRelPosition()
            super.close()
        }

    }

    return PolyEntity
})