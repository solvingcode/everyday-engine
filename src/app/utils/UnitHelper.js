import Vertex from './Vertex.js'
import Vector from './Vector.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import GeometryHelper from './GeometryHelper.js'
import Window from '../core/Window.js'
import ColliderComponent from '../component/internal/ColliderComponent.js'
import Size from '../pobject/Size.js'
import RectColliderComponent from '../component/internal/RectColliderComponent.js'
import CircleColliderComponent from '../component/internal/CircleColliderComponent.js'
import {PrimitiveShape} from '../unit/Unit.js'
import RectUnitInstant from '../unit/instant/type/internal/primitive/RectUnitInstant.js'
import CircleUnitInstant from '../unit/instant/type/internal/primitive/CircleUnitInstant.js'
import SystemError from '../exception/type/SystemError.js'
import Style from '../pobject/Style.js'
import GUIColliderComponent from '../component/internal/gui/collider/GUIColliderComponent.js'

export default class UnitHelper {

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @return {boolean}
     */
    static isInside(unit, point) {
        return Vertex.contains(this.generateVertices(unit), this.fromAbsolutePosition(unit, point))
    }

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @param {Size} size
     * @return {boolean}
     */
    static isInsideArea(unit, point, size) {
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
     * Generate vertices (relative coordinates)
     * @param {Unit} unit
     * @return {Vector[]}
     */
    static generateVertices(unit) {
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const vertices = GeometryHelper.loadVertices(meshComponent.getSize())
        return GeometryHelper.rotateVertices(vertices, transformComponent.getRotation(), meshComponent.getSize())
    }

    /**
     * Convert current position to large center position
     * @param {Unit} unit
     * @return {Vector}
     */
    static toLargeCenterPosition(unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        const center = this.getLargeCenterByUnit(unit)
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
        const center = this.getLargeCenterByUnit(unit)
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
        const center = this.getLargeCenterByUnit(unit)
        return new Vector({
            x: position.x + center.x,
            y: position.y + center.y
        })
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {Vector} unitPosition
     * @param {number} colliderRotation
     * @return {Vector}
     */
    static toColliderCenterPosition(unit, colliderComponent, unitPosition, colliderRotation) {
        const transformComponent = unit.getComponent(TransformComponent)
        const unitRotation = transformComponent.getRotation()
        const position = Vector.add(unitPosition, colliderComponent.getPosition())
        const center = GeometryHelper.getLargeCenterFromRotationSize(unitRotation,
            this.getColliderSize(unit, colliderComponent))
        return new Vector({
            x: position.x + center.x,
            y: position.y + center.y
        })
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Size}
     */
    static getColliderSize(unit, colliderComponent) {
        let resultSize = new Size(0)
        const unitSize = unit.getComponent(MeshComponent).getSize()
        if (colliderComponent instanceof RectColliderComponent) {
            const colliderSizeRelated = colliderComponent.getSize()
            resultSize = new Size({
                width: unitSize.getWidth() * colliderSizeRelated.getWidth() / 100,
                height: unitSize.getHeight() * colliderSizeRelated.getHeight() / 100
            })
        } else if (colliderComponent instanceof CircleColliderComponent) {
            const colliderSizeRelated = new Size(colliderComponent.getRadius())
            resultSize = new Size({
                width: unitSize.getWidth() * colliderSizeRelated.getWidth() / 100,
                height: unitSize.getWidth() * colliderSizeRelated.getHeight() / 100
            })
        }
        return resultSize
    }

    /**
     * Calculate centroid (based on entity's rotation)
     * @param {Unit} unit
     * @return {Vector}
     */
    static getLargeCenterByUnit(unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        return GeometryHelper.getLargeCenterFromRotationSize(transformComponent.getRotation(), meshComponent.getSize())
    }

    /**
     * @param {Camera} camera
     * @param {Vector[]} vertices
     * @return {Vector[]}
     */
    static scaleVertices(camera, vertices) {
        return vertices.map(vertex => camera.toCameraScale(vertex))
    }

    /**
     * @param {Unit} unit
     * @param {Camera} camera
     * @param {MeshManager} meshManager
     * @param {Renderer} renderer
     */
    static drawUnit(unit, camera, meshManager, renderer) {
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
    static isColliderEditing(unit) {
        return !!this.getColliderEditing(unit)
    }

    /**
     * @param {Unit} unit
     * @return {ColliderComponent}
     */
    static getColliderEditing(unit) {
        return unit.findComponentsByClass(ColliderComponent)
            .find(component => component.isEditFlag())
    }

    /**
     * @param {Size} unitSize
     * @param {Size} colliderSize
     * @param {number} unitRotation
     * @param {Vector} colliderRelativePosition
     * @return {Vector}
     */
    static GetCorrectionVector(unitSize, colliderSize, unitRotation, colliderRelativePosition){
        const unitVertices = GeometryHelper.loadVertices(unitSize)
        const colliderVertices = GeometryHelper.loadVertices(colliderSize)
            .map(colliderVertex => Vector.subtract(colliderVertex, colliderRelativePosition))
        const initDiff = Vector.subtract(colliderVertices[0], unitVertices[0])
        const unitVerticesRotated = GeometryHelper.rotateVertices(unitVertices, unitRotation, unitSize)
        const colliderVerticesRotated = GeometryHelper.rotateVertices(colliderVertices, unitRotation, colliderSize)
        const rotatedDiff = Vector.subtract(colliderVerticesRotated[0], unitVerticesRotated[0])
        return Vector.subtract(initDiff, rotatedDiff)
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @return {Unit[]}
     */
    static createGUICollider(unit, world) {
        const unitManager = world.getUnitManager()
        const colliderComponents = unit.findComponentsByClass(ColliderComponent)
        const unitPosition = unit.getComponent(TransformComponent).getPosition()
        const unitRotation = unit.getComponent(TransformComponent).getRotation()
        const unitSize = unit.getComponent(MeshComponent).getSize()
        const colliderUnits = []
        colliderComponents.forEach(colliderComponent => {
            if (colliderComponent.isEditFlag()) {
                const colliderRelativePosition = colliderComponent.getPosition()
                const colliderPosition = Vector.add(unitPosition, colliderRelativePosition)
                const colliderSize = UnitHelper.getColliderSize(unit, colliderComponent)
                const colliderRotation = unitRotation
                const correctionVector = this.GetCorrectionVector(unitSize, colliderSize, unitRotation, colliderRelativePosition)
                const colliderCorrectedPosition = Vector.add(colliderPosition, correctionVector)

                const shape = colliderComponent.getShape()
                let unitInstantClass
                switch (shape) {
                    case PrimitiveShape.RECT:
                        unitInstantClass = RectUnitInstant
                        break
                    case PrimitiveShape.CIRCLE:
                        unitInstantClass = CircleUnitInstant
                        break
                    default:
                        throw new SystemError(`No Unit Instant configured for Collider "${shape}"`)
                }

                const style = new Style()
                style.setColor('#1fa834')
                style.setBorderSize(2)

                const colliderUnit = unitManager
                    .createUnitInstant(unitInstantClass, colliderCorrectedPosition, colliderSize, style)
                colliderUnit.createComponents([GUIColliderComponent])
                colliderUnit.getComponent(TransformComponent).setRotation(colliderRotation)
                colliderUnits.push(colliderUnit)
            }
        })
        return colliderUnits
    }
}