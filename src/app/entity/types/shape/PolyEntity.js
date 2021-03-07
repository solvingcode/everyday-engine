import EntityMotion from '../../EntityMotion.js'
import Window from '../../../core/Window.js'
import Vertex from '../../../utils/Vertex.js'
import Vector from '../../../utils/Vector.js'
import Size from '../../../pobject/Size.js'

class PolyEntity extends EntityMotion {

    constructor(props) {
        super(props)
        this.shape = EntityMotion.shapes.POLY
        this.vertices = []
        this.nbPoints = 0
    }

    /**
     * @override
     */
    init(world) {
        this.generatePoints()
        const minPoint = this.getMinPoint()
        this.setMeshPosition(new Vector({x: minPoint.x, y: minPoint.y}))
        this.calculateSize()
        return true
    }

    /**
     * Get the min point
     */
    getMinPoint() {
        const x = this.vertices.reduce((minX, point) => point.x < minX ? point.x : minX, 99999)
        const y = this.vertices.reduce((minY, point) => point.y < minY ? point.y : minY, 99999)
        return {x, y}
    }

    /**
     * Get the max point
     */
    getMaxPoint() {
        const x = this.vertices.reduce((maxX, point) => point.x > maxX ? point.x : maxX, 0)
        const y = this.vertices.reduce((maxY, point) => point.y > maxY ? point.y : maxY, 0)
        return {x, y}
    }

    /**
     * Add vertices to the poly based on the click position
     */
    generatePoints() {
        const window = Window.get()
        const position = window.mouse.scenePosition
        const currentPosition = window.mouse.currentScenePosition
        if (!this.vertices.find(point => point.x === position.x && point.y === position.y)) {
            this.vertices[this.nbPoints] = position
            this.nbPoints = this.vertices.length
        } else {
            this.vertices[this.nbPoints] = currentPosition
        }
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, camera} = dataContext
        this.drawPoints(context, camera)
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Camera} camera
     */
    drawPoints(context, camera) {
        context.beginPath()
        this.vertices.forEach((point, iPoint) => {
            const scalePoint = camera.toCameraScale(point)
            if (!iPoint) {
                context.moveTo(scalePoint.x, scalePoint.y)
            } else {
                context.lineTo(scalePoint.x, scalePoint.y)
            }
        })
        context.closePath()
    }

    /**
     * @param {Vector[]} vertices
     */
    setPoints(vertices) {
        this.vertices = vertices
        this.calculateSize()
    }

    /**
     * Do not calculate Size if it's defined in the props
     */
    calculateSize() {
        if (this.props.getSize()) {
            this.size = this.props.getSize()
        } else {
            const minPoint = this.getMinPoint()
            const maxPoint = this.getMaxPoint()
            this.size = new Size({width: maxPoint.x - minPoint.x, height: maxPoint.y - minPoint.y})
        }
    }

    /**
     * Convert vertices to relative position of the Entity
     */
    convertPointToRelPosition() {
        const minPoint = this.getMinPoint()
        this.vertices = this.vertices.map(point => (new Vector({x: point.x - minPoint.x, y: point.y - minPoint.y})))
    }

    /**
     * @override
     */
    getLargeCenter() {
        return Vertex.getCenter(this.vertices)
    }

    /**
     * @override
     */
    loadVertices() {
        return this.vertices
    }

    /**
     * @override
     */
    close(world) {
        this.vertices.push(this.vertices[0])
        this.build(world)
        this.convertPointToRelPosition()
        super.close(world)
    }

}

export default PolyEntity