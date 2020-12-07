define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')
    const Window = require('../../../core/Window.js')
    const Vertex = require('../../../utils/Vertex.js')

    class PolyEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.POLY
            this.points = []
            this.nbPoints = 0
        }

        /**
         * @override
         */
        init() {
            this.makePoints()
            const minPoint = this.getMinPoint()
            this.setMeshPosition({ x: minPoint.x, y: minPoint.y })
            this.calculateSize()
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
        makePoints() {
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
         * @override
         */
        drawContext(dataContext) {
            const {context} = dataContext
            this.drawPoints(context)
        }

        /**
         * @param {OffscreenCanvasRenderingContext2D} context 
         */
        drawPoints(context) {
            context.beginPath()
            this.points.forEach((point, iPoint) => {
                if(!iPoint){
                    context.moveTo(point.x, point.y)
                }
                else {
                    context.lineTo(point.x, point.y)
                }
            })
            context.closePath()
        }

        /**
         * @param {Vector[]} points
         */
        setPoints(points) {
            this.points = points
            this.calculateSize()
        }

        calculateSize(){
            const minPoint = this.getMinPoint()
            const maxPoint = this.getMaxPoint()
            this.size = { width: maxPoint.x - minPoint.x, height: maxPoint.y - minPoint.y }
        }

        /**
         * Convert points to relative position of the Entity
         */
        convertPointToRelPosition() {
            const minPoint = this.getMinPoint()
            this.points = this.points.map(point => ({ x: point.x - minPoint.x, y: point.y - minPoint.y }))
        }

        /**
         * @override
         */
        getCenter() {
            return Vertex.getCenter(this.points)
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