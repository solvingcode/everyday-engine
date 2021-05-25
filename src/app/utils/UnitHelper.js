import Vertex from './Vertex.js'
import Vector from './Vector.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import GeometryHelper from './GeometryHelper.js'
import Window from '../core/Window.js'
import ColliderComponent from '../component/internal/ColliderComponent.js'

export default class UnitHelper {

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @return {boolean}
     */
    static isInside(unit, point){
        return Vertex.contains(this.generateVertices(unit), this.fromAbsolutePosition(unit, point))
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

    /**
     * Move the unit by distance related to a given point.
     * Move also attached entities
     * @param {Unit} unit
     * @param {Vector} point relative position
     * @param {Vector} target absolute position
     */
    static moveRelativePointTo(unit, point, target) {
        const transformComponent = unit.getComponent(TransformComponent)
        const position = transformComponent.getPosition()
        const diffDistance = new Vector({x: target.x - position.x - point.x, y: target.y - position.y - point.y})
        const newPosition = new Vector({x: position.x + diffDistance.x, y: position.y + diffDistance.y, z: position.z})
        transformComponent.setPosition(newPosition)
    }

    /**
     * Generate vertices (relative coordinates)
     * @param {Unit} unit
     * @return {Vector[]}
     */
    static generateVertices(unit) {
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const vertices = this.loadVertices(meshComponent.getSize())
        return this.rotateVertices(vertices, transformComponent.getRotation(), meshComponent.getSize())
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
    static rotateVertices(vertices, rotation, size, rotateCenter = new Vector()){
        const {width: mWidth, height: mHeight} = GeometryHelper.getLargestRectangle(rotation || 0, size)
        const center = new Vector({x: size.width / 2, y: size.height / 2})
        const mCenter = new Vector({x: mWidth / 2, y: mHeight / 2})

        let newVertices = vertices
        newVertices = Vertex.translate(newVertices, center, -1)
        newVertices = Vertex.rotate(newVertices, rotation || 0, rotateCenter)
        newVertices = Vertex.translate(newVertices, mCenter)

        return newVertices
    }

    /**
     * Convert current position to large center position
     * @param {Unit} unit
     * @return {Vector}
     */
    static toLargeCenterPosition(unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        const center = this.getLargeCenter(unit)
        return new Vector({
            x: transformComponent.getPosition().getX() + center.x,
            y: transformComponent.getPosition().getY() + center.y
        })
    }

    /**
     * Get current position from center position
     * @param {Unit} unit
     * @param {Vector} position
     * @return {Vector}
     */
    static fromCenterPosition(unit, position) {
        const center = this.getLargeCenter(unit)
        return new Vector({
            x: position.x - center.x,
            y: position.y - center.y
        })
    }

    /**
     * Convert current position to center position
     * @return {Vector}
     */
    static toCenterPosition(unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        const position = transformComponent.getPosition()
        const center = this.getLargeCenter(unit)
        return new Vector({
            x: position.x + center.x,
            y: position.y + center.y
        })
    }

    /**
     * Calculate centroid (based on entity's rotation)
     * @param {Unit} unit
     * @return {Vector}
     */
    static getLargeCenter(unit){
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const size = GeometryHelper.getLargestRectangle(transformComponent.getRotation(), meshComponent.getSize())
        return new Vector({
            x: size.width / 2,
            y: size.height / 2
        })
    }

    /**
     * @param {Camera} camera
     * @param {Vector[]} vertices
     * @return {Vector[]}
     */
    static scaleVertices(camera, vertices){
        return vertices.map(vertex => camera.toCameraScale(vertex))
    }

    /**
     * @param {Unit} unit
     * @param {Camera} camera
     * @param {MeshManager} meshManager
     * @param {Renderer} renderer
     */
    static drawUnit(unit, camera, meshManager, renderer){
        const {size: windowSize} = Window.get()
        const {x: cameraX, y: cameraY} = camera.position
        const {width: sceneWidth, height: sceneHeight} = camera.fromScaleSize(windowSize)
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const size = meshComponent.getSize()
        const position = transformComponent.getPosition()
        const minX = cameraX - size.getWidth()
        const maxX = cameraX + sceneWidth
        const minY = cameraY - size.getHeight()
        const maxY = cameraY + sceneHeight
        if (minX <= position.getX() && maxX >= position.getX() &&
            minY <= position.getY() && maxY >= position.getY()) {
            const mesh = meshManager.get(unit.getId())
            mesh && renderer.draw(mesh, position, camera)
        }
    }

    /**
     * @param {Unit} unit
     * @return {boolean}
     */
    static isColliderEditing(unit){
        return !!this.getColliderEditing(unit)
    }

    /**
     * @param {Unit} unit
     * @return {ColliderComponent}
     */
    static getColliderEditing(unit){
        return unit.findComponentsByClass(ColliderComponent)
            .find(component => component.isEditFlag())
    }

}