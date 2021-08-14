import Size from '../pobject/Size.js'
import Vector from './Vector.js'
import Vertex from './Vertex.js'
import TransformHelper from './TransformHelper.js'

export default class GeometryHelper{

    /**
     * Calculate the largest rectangle for given rotation and size
     * @param {number} angleRadian
     * @param {Size} size
     */
    static getLargestRectangle(angleRadian, size) {
        const cosA = Math.cos(angleRadian || 0)
        const sinA = Math.sin(angleRadian || 0)
        const points = [
            {x: 0, y: 0},
            {x: size.width, y: 0},
            {x: size.width, y: size.height},
            {x: 0, y: size.height}
        ]
        const rotatedPoints = points.map(({x, y}) => ({
            x: x * cosA - y * sinA,
            y: x * sinA + y * cosA
        }))
        const minX = rotatedPoints.reduce((mnX, current) => ((mnX > current.x && current.x) || mnX), rotatedPoints[0].x)
        const maxX = rotatedPoints.reduce((mxX, current) => ((mxX < current.x && current.x) || mxX), rotatedPoints[0].x)
        const minY = rotatedPoints.reduce((mnY, current) => ((mnY > current.y && current.y) || mnY), rotatedPoints[0].y)
        const maxY = rotatedPoints.reduce((mxY, current) => ((mxY < current.y && current.y) || mxY), rotatedPoints[0].y)
        return new Size({
            width: Math.ceil(maxX - minX),
            height: Math.ceil(maxY - minY)
        })
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {{position: Vector, size: Size, vertices: Vector[]}}
     */
    static getRectByDistance(vectorA, vectorB){
        const position = new Vector()
        const dX = vectorB.getX() - vectorA.getX()
        const dY = vectorB.getY() - vectorA.getY()
        const width = Math.abs(dX)
        const height = Math.abs(dY)
        const size = new Size({width, height})
        const vertices = [new Vector(), new Vector()]
        if(dX < 0){
            position.setX(vectorB.getX())
            vertices[0].setX(width)
            vertices[1].setX(0)
        }else{
            position.setX(vectorA.getX())
            vertices[0].setX(0)
            vertices[1].setX(width)
        }
        if(dY < 0){
            position.setY(vectorB.getY())
            vertices[0].setY(height)
            vertices[1].setY(0)
        }else{
            position.setY(vectorA.getY())
            vertices[0].setY(0)
            vertices[1].setY(height)
        }

        return {position, size, vertices}
    }

    /**
     * @param {Vector} position
     * @param {number} rotation
     * @param {Size} size
     * @return {Vector}
     */
    static toCenterPosition(position, rotation, size){
        const center = this.getLargeCenterFromRotationSize(rotation, size)
        return new Vector({
            x: position.x + center.x,
            y: position.y + center.y
        })
    }

    /**
     * @param {Vector} position
     * @param {number} rotation
     * @param {Size} size
     * @return {Vector}
     */
    static fromCenterPosition(position, rotation, size) {
        const center = this.getLargeCenterFromRotationSize(rotation, size)
        return new Vector({
            x: position.x - center.x,
            y: position.y - center.y
        })
    }

    /**
     * @param {number} rotation
     * @param {Size} size
     * @return {Vector}
     */
    static getLargeCenterFromRotationSize(rotation, size) {
        const gSize = this.getLargestRectangle(rotation, size)
        return new Vector({
            x: gSize.width / 2,
            y: gSize.height / 2
        })
    }

    /**
     * @param {number} rotation
     * @param {Vector} scale
     * @return {Vector}
     */
    static getLargeCenterFromRotationScale(rotation, scale) {
        return this.getLargeCenterFromRotationSize(rotation, TransformHelper.getSizeFromScale(scale))
    }

    /**
     * @param {Size} size
     * @return {Vector[]}
     */
    static loadVertices(size) {
        const {width, height} = size
        return [
            new Vector({x: 0, y: 0}),
            new Vector({x: width, y: 0}),
            new Vector({x: width, y: height}),
            new Vector({x: 0, y: height})
        ]
    }

    /**
     * @param {Vector[]} vertices
     * @param {number} rotation
     * @param {Size} size
     * @param {Vector} rotateCenter
     * @return {Vector[]}
     */
    static rotateVertices(vertices, rotation, size, rotateCenter = new Vector()) {
        const {width: mWidth, height: mHeight} = this.getLargestRectangle(rotation || 0, size)
        const center = new Vector({x: size.width / 2, y: size.height / 2})
        const mCenter = new Vector({x: mWidth / 2, y: mHeight / 2})

        let newVertices = vertices
        newVertices = Vertex.translate(newVertices, center, -1)
        newVertices = Vertex.rotate(newVertices, rotation || 0, rotateCenter)
        newVertices = Vertex.translate(newVertices, mCenter)

        return newVertices
    }

}