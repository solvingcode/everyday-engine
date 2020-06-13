define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const Window = require('../../core/Window.js')

    class PolyEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = 'Polygon'
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
         * Generate pixels for the poly
         */
        generate() {
            this.canvas = new OffscreenCanvas(this.size.width, this.size.height)
            this.pixels = new Array(this.size.width * this.size.height)
            const context = this.canvas.getContext('2d')
            context.beginPath()
            this.drawPoints(context)
            context.stroke()
            this.setPixelsByContext(context, this.size.width, this.size.height)
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
         * Convert points to relative position of the Entity
         */
        convertPointToRelPosition() {
            const minPoint = this.getMinPoint()
            this.points = this.points.map(point => ({ x: point.x - minPoint.x, y: point.y - minPoint.y }))
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