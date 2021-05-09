import Size from '../pobject/Size.js'
import Vector from './Vector.js'

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

}