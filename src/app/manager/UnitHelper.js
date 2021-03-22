import Vertex from '../utils/Vertex.js'
import Vector from '../utils/Vector.js'
import MeshComponent from '../component/MeshComponent.js'
import TransformComponent from '../component/TransformComponent.js'

export default class UnitHelper {

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @return {boolean}
     */
    static isInside(unit, point){
        return Vertex.contains(unit.getComponent(MeshComponent).getVertices(), this.fromAbsolutePosition(unit, point))
    }

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @param {Size} size
     * @return {boolean}
     */
    static isInsideArea(unit, point, size){
        const transform = unit.getComponent(TransformComponent)
        const meshSize = unit.getComponent(MeshComponent).getSize()
        const position = transform.getPosition()
        return position.getX() >= point.x &&
            position.getX() + meshSize.getWidth() <= point.x + size.width &&
            position.getY() >= point.y &&
            position.getY() + meshSize.getHeight() <= point.y + size.height
    }

    /**
     * Convert absolute coordinate to relative coordinate
     * @param {Unit} unit
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */
    static fromAbsolutePosition(unit, point) {
        const position = unit.getComponent(TransformComponent).getPosition()
        return new Vector({
            x: point.x - position.getX(),
            y: point.y - position.getY()
        })
    }

}