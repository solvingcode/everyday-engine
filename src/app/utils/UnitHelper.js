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
import ImageHelper from './ImageHelper.js'
import TransformHelper from './TransformHelper.js'
import ObjectHelper from './ObjectHelper.js'
import GUISelectorComponent from '../component/internal/gui/selector/GUISelectorComponent.js'
import UITransformComponent from '../component/internal/ui/UITransformComponent.js'
import GUIAnchorComponent from '../component/internal/gui/anchor/GUIAnchorComponent.js'
import AnimationComponent from '../component/internal/AnimationComponent.js'
import AssetHelper from './AssetHelper.js'
import ClassHelper from './ClassHelper.js'

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
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} point canvas coordinates (window)
     * @return {boolean}
     */
    static isInsideWindowPosition(world, unit, point) {
        return this.isInside(unit, world.getWorldPosition(point))
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
        const transformComponent = unit.getComponent(TransformComponent)
        const size = TransformHelper.getSizeFromScale(transformComponent.getScale())
        const vertices = GeometryHelper.loadVertices(size)
        return GeometryHelper.rotateVertices(vertices, transformComponent.getRotation(), size)
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
     * @param {Vector} position
     * @return {Vector}
     */
    static convertToCenterPosition(unit, position) {
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
        const colliderRelativePosition = this.getColliderRelativePosition(unit, colliderComponent)
        const position = Vector.add(unitPosition, colliderRelativePosition)
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
     * @return {Vector}
     */
    static getColliderPosition(unit, colliderComponent) {
        const transformComponent = unit.getComponent(TransformComponent)
        const unitPosition = transformComponent.getPosition()
        const unitRotation = transformComponent.getRotation()
        const unitSize = TransformHelper.getSizeFromScale(transformComponent.getScale())
        const colliderRelativePosition = this.getColliderRelativePosition(unit, colliderComponent)
        const colliderPosition = Vector.add(unitPosition, colliderRelativePosition)
        const colliderSize = UnitHelper.getColliderSize(unit, colliderComponent)
        const correctionVector = this.GetCorrectionVector(unitSize, colliderSize, unitRotation, colliderRelativePosition)
        return Vector.add(colliderPosition, correctionVector)
    }

    /**
     * @todo: not working
     * @param {Unit} parentUnit
     * @param {Unit} childUnit
     * @return {Vector}
     */
    static getChildPosition(parentUnit, childUnit) {
        const pTransformComponent = parentUnit.getComponent(TransformComponent)
        const cTransformComponent = parentUnit.getComponent(TransformComponent)
        const parentRotation = pTransformComponent.getRotation()
        const parentSize = TransformHelper.getSizeFromScale(pTransformComponent.getScale())
        const childLocalPosition = cTransformComponent.getLocalPosition()
        const childPosition = cTransformComponent.getPosition()
        const childSize = TransformHelper.getSizeFromScale(cTransformComponent.getScale())
        const correctionVector = this.GetCorrectionVector(parentSize, childSize, parentRotation, childLocalPosition)
        return Vector.add(childPosition, correctionVector)
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Size}
     */
    static getColliderSize(unit, colliderComponent) {
        let resultSize = new Size(0)
        const unitScale = unit.getComponent(TransformComponent).getScale()
        const unitSize = TransformHelper.getSizeFromScale(unitScale)
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
        return GeometryHelper.getLargeCenterFromRotationScale(transformComponent.getRotation(), transformComponent.getScale())
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
            const positionToCameraView = camera.toCameraScale(camera.toCanvasCoord(position))
            const mesh = meshManager.get(unit.getId())
            mesh && renderer.draw(mesh, positionToCameraView)
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
     * @param {Unit} unit
     * @return {Vector}
     */
    static getUnitRelativeCenter(unit) {
        const scale = unit.getComponent(TransformComponent).getScale()
        const size = TransformHelper.getSizeFromScale(scale)
        return new Vector({
            x: size.getWidth() / 2,
            y: size.getHeight() / 2
        })
    }

    /**
     * @param {Size} parentSize
     * @param {Size} childSize
     * @param {number} parentRotation
     * @param {Vector} childLocalPosition
     * @return {Vector}
     */
    static GetCorrectionVector(parentSize, childSize, parentRotation, childLocalPosition) {
        const unitVertices = GeometryHelper.loadVertices(parentSize)
        const colliderVertices = GeometryHelper.loadVertices(childSize)
            .map(colliderVertex => Vector.subtract(colliderVertex, childLocalPosition))
        const initDiff = Vector.subtract(colliderVertices[0], unitVertices[0])
        const unitVerticesRotated = GeometryHelper.rotateVertices(unitVertices, parentRotation, parentSize)
        const colliderVerticesRotated = GeometryHelper.rotateVertices(colliderVertices, parentRotation, childSize)
        const rotatedDiff = Vector.subtract(colliderVerticesRotated[0], unitVerticesRotated[0])
        return Vector.subtract(initDiff, rotatedDiff)
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Vector}
     */
    static getColliderRelativePosition(unit, colliderComponent) {
        const colliderSize = this.getColliderSize(unit, colliderComponent)
        const transformScale = TransformHelper.getScaleDirection(unit.getComponent(TransformComponent).getScale())

        const colliderVectorSize = new Vector({
            x: colliderSize.getWidth(),
            y: colliderSize.getHeight()
        })
        const unitRelativeCenter = this.getUnitRelativeCenter(unit)

        const colliderRelativePosition = colliderComponent.getPosition()
        //convert relative position to center coordinate of the unit
        const colliderRelativePositionCenter = Vector.subtract(colliderRelativePosition, unitRelativeCenter)
        //scale the relative position according to the center of the unit
        const positionRelativeCenter = Vector.linearMultiply(colliderRelativePositionCenter, transformScale)
        //convert relative position from unit center coordinate to the top left coordinate
        const positionRelative = Vector.add(positionRelativeCenter, unitRelativeCenter)
        //flip the collider
        const flipVector = new Vector({
            x: transformScale.getX() < 0 ? colliderVectorSize.getX() : 0,
            y: transformScale.getY() < 0 ? colliderVectorSize.getY() : 0
        })
        return Vector.subtract(positionRelative, flipVector)
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @return {Unit[]}
     */
    static createGUICollider(unit, world) {
        const colliderComponents = unit.findComponentsByClass(ColliderComponent)
            .filter(colliderComponent => colliderComponent.isEnabled())
        const unitRotation = unit.getComponent(TransformComponent).getRotation()
        const colliderUnits = []
        const unitManager = world.getUnitManager()
        colliderComponents.forEach(colliderComponent => {
            const existGUICollider = unitManager.getUnitsHasComponents([GUIColliderComponent])
                .find(guiCollider => guiCollider.getComponent(GUIColliderComponent).getComponentId() === colliderComponent.getId())
            const colliderSize = UnitHelper.getColliderSize(unit, colliderComponent)
            const colliderRotation = unitRotation
            const colliderCorrectedPosition = this.getColliderPosition(unit, colliderComponent)
            if (colliderComponent.isEditFlag() && !existGUICollider) {
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

                const colliderUnit = world
                    .createUnitInstant(unitInstantClass, colliderCorrectedPosition, colliderSize, style)
                colliderUnit.createComponents([GUIColliderComponent])
                colliderUnit.getComponent(GUIColliderComponent).setComponentId(colliderComponent.getId())
                colliderUnit.getComponent(GUIColliderComponent).setUnitId(unit.getId())
                colliderUnit.getComponent(TransformComponent).setLocalRotation(TransformHelper.getLocalRotation(colliderRotation, unit))
                colliderUnits.push(colliderUnit)
            } else if (existGUICollider && !colliderComponent.isEditFlag()) {
                unitManager.deleteUnit(existGUICollider)
            } else if (existGUICollider) {
                const transformComponent = existGUICollider.getComponent(TransformComponent)
                if (!ObjectHelper.isEqual(transformComponent.getPosition(), colliderCorrectedPosition)) {
                    transformComponent.setLocalPosition(TransformHelper.getLocalPosition(colliderCorrectedPosition, unit))
                }
                if (!ObjectHelper.isEqual(transformComponent.getScale(), TransformHelper.getScaleFromSize(colliderSize))) {
                    transformComponent.setLocalScale(TransformHelper.getLocalScale(TransformHelper.getScaleFromSize(colliderSize), unit))
                }
                colliderUnits.push(existGUICollider)
            }
        })
        return colliderUnits
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @return {Unit[]}
     */
    static createGUISelector(unit, world) {
        const transformComponent = unit.getComponent(TransformComponent)
        const rotation = transformComponent.getRotation()

        const style = new Style()
        style.setColor('#ffe600')
        style.setBorderSize(2)

        const selectorUnit = world.createUnitInstant(RectUnitInstant, Vector.zero(), Vector.one(), style)
        selectorUnit.createComponents([GUISelectorComponent])
        selectorUnit.getComponent(GUISelectorComponent).setUnitId(unit.getId())
        selectorUnit.getComponent(TransformComponent).setLocalRotation(rotation)
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @return {Unit[]}
     */
    static createGUIAnchor(unit, world) {
        const unitManager = world.getUnitManager()
        const anchorSize = this.getSizeAnchor()

        const style = new Style()
        style.setFillColor('#00ffea')
        style.setColor('#000000')
        style.setBorderSize(1)

        const anchors = this.getAnchors(world, unit)

        anchors.forEach((anchorPosition, index) => {
            const existGUIAnchor = unitManager.getUnitsHasComponents([GUIAnchorComponent])
                .find(guiAnchor => guiAnchor.getComponent(GUIAnchorComponent).getOffset() === index + 1 &&
                    guiAnchor.getComponent(GUIAnchorComponent).getUnitId() === unit.getId()
                )
            if (!existGUIAnchor) {
                const anchorUnit = world.createUnitInstant(RectUnitInstant, anchorPosition, new Size(anchorSize), style)
                anchorUnit.createComponents([GUIAnchorComponent])
                anchorUnit.getComponent(GUIAnchorComponent).setUnitId(unit.getId())
                anchorUnit.getComponent(GUIAnchorComponent).setOffset(index + 1)
            } else {
                const transformComponent = existGUIAnchor.getComponent(TransformComponent)
                if (!ObjectHelper.isEqual(transformComponent.getPosition(), anchorPosition)) {
                    transformComponent.setPosition(anchorPosition)
                }
            }
        })
    }

    /**
     * @return {number}
     */
    static getSizeAnchor() {
        return 20
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return [Vector, Vector, Vector, Vector]
     */
    static getAnchors(world, unit) {
        const unitManager = world.getUnitManager()
        const uiTransformComponent = unit.getComponent(UITransformComponent)
        const parentUnit = unitManager.findParentUnit(unit)
        const parentTransformComponent = parentUnit.getComponent(TransformComponent)
        const parentPosition = parentTransformComponent.getPosition()
        const parentScale = parentTransformComponent.getScale()
        const parentSize = TransformHelper.getSizeFromScale(parentScale)
        const anchorSize = this.getSizeAnchor()
        const anchorMin = uiTransformComponent.getAnchorMin()
        const anchorMax = uiTransformComponent.getAnchorMax()
        return [
            Vector.add(parentPosition, new Vector({
                x: anchorMin.getX() * parentSize.getWidth() - anchorSize,
                y: anchorMin.getY() * parentSize.getHeight() - anchorSize
            })),
            Vector.add(parentPosition, new Vector({
                x: anchorMax.getX() * parentSize.getWidth(),
                y: (1 - anchorMax.getY()) * parentSize.getHeight() - anchorSize
            })),
            Vector.add(parentPosition, new Vector({
                x: anchorMax.getX() * parentSize.getWidth(), y: anchorMax.getY() * parentSize.getHeight()
            })),
            Vector.add(parentPosition, new Vector({
                x: anchorMin.getX() * parentSize.getWidth() - anchorSize,
                y: (1 - anchorMin.getY()) * parentSize.getHeight()
            }))
        ]
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {number} step
     * @param {Vector} direction
     */
    static moveUnit(world, unit, step, direction) {
        const camera = world.getCamera()
        const stepScale = camera.fromScaleNumber(step)
        const moveDirection = new Vector({
            x: stepScale * direction.x,
            y: stepScale * direction.y
        })
        const transformComponent = unit.getComponent(TransformComponent)
        const position = transformComponent.getPosition()
        transformComponent.setPosition(Vector.add(position, moveDirection))
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {number} step
     * @param {Vector} direction
     */
    static moveCollider(world, unit, step, direction) {
        const camera = world.getCamera()
        const stepScale = camera.fromScaleNumber(step)
        const moveDirection = new Vector({
            x: stepScale * direction.x,
            y: stepScale * direction.y
        })
        const colliderComponent = UnitHelper.getColliderEditing(unit)
        const position = colliderComponent.getPosition()
        colliderComponent.setPosition(Vector.add(position, moveDirection))
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {DataContext} dataContext
     * @param {MeshComponent} meshComponent
     */
    static generateImageRepeat(canvas, dataContext, meshComponent) {
        const {camera} = dataContext
        const meshSize = meshComponent.getSize()
        const imageScale = meshComponent.getImageScale()
        const imagePosition = meshComponent.getImagePosition()
        const imageRepeatAreaMin = meshComponent.getImageRepeatAreaMin()
        const imageRepeatAreaMax = meshComponent.getImageRepeatAreaMax()
        const canvasBgRepeat = ImageHelper.generateImageRepeat(canvas, meshSize, imageScale, imagePosition, imageRepeatAreaMin, imageRepeatAreaMax)
        const canvasCameraScale = camera.toScaleSize(new Size({
            width: canvasBgRepeat.width,
            height: canvasBgRepeat.height
        }))
        return ImageHelper.resizeCanvasBySize(canvasBgRepeat, canvasCameraScale)
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {Animation}
     */
    static getAnimation(world, unit) {
        const animationController = this.getAnimationController(world, unit)
        if (animationController) {
            const animationComponent = unit.getComponent(AnimationComponent)
            return world.getAnimationManager().findById(animationComponent.getAnimation())
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {AScript}
     */
    static getAnimationController(world, unit) {
        if (unit) {
            return world.getUnitManager().getUnitAnimationController(world, unit)
        }
    }

    /**
     * @param {World} world
     * @param {Component} component
     * @param {Function} setter
     * @param {*} value
     * @param {Storage} storage
     */
    static updateOrRecordComponent(world, component, setter, value, storage) {
        const animation = world.getAnimationManager().getAnimationRecording()
        if (animation) {
            const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
            const cloneComponent = _.cloneDeep(component)
            const attributeName = ClassHelper.getAttributeFromSetter(setter)
            setter.bind(cloneComponent)(value)
            animation.setFrame(animation.getTime(), cloneComponent.getName(), attributeName, cloneComponent.get(attributeName))
            AssetHelper.regenerate(animationAsset, animation, storage)
        } else {
            setter.bind(component)(value)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    static hasPhysics(world, unit) {
        return world.getPhysicsManager().hasUnit(unit)
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {number} angle
     */
    static setRotation(world, unit, angle) {
        const physicsManager = world.getPhysicsManager()
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if (this.hasPhysics(world, unit)) {
            physicsManager.setRotation(unit, angle)
        } else {
            transformComponent.setRotation(angle, true)
            meshComponent.setGenerated(false)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} position
     */
    static setPosition(world, unit, position) {
        const physicsManager = world.getPhysicsManager()
        const transformComponent = unit.getComponent(TransformComponent)
        if (this.hasPhysics(world, unit)) {
            physicsManager.setPosition(unit, this.convertToCenterPosition(unit, position))
        } else {
            transformComponent.setPosition(_.cloneDeep(position), true)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} scale
     */
    static setScale(world, unit, scale) {
        const physicsManager = world.getPhysicsManager()
        const transformComponent = unit.getComponent(TransformComponent)
        if (this.hasPhysics(world, unit)) {
            physicsManager.scale(unit, Vector.sign(scale))
        }
        transformComponent.setScale(scale, true)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    static getAxis(unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        return Vector.sign(transformComponent.getScale())
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} newScale
     */
    static getPositionFromScale(world, unit, newScale){
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const transformComponent = unit.getComponent(TransformComponent)
        const scale = transformComponent.getScale()
        const localPosition = transformComponent.getLocalPosition()
        if(parentUnit){
            const parentTransformComponent = unit.getComponent(TransformComponent)
            const parentScale = parentTransformComponent.getScale()
            const scaleRatio = Vector.linearDivide(newScale, scale)
            const sizeVector = Vector.divide(
                Vector.subtract(
                    Vector.fromSize(TransformHelper.getSizeFromScale(parentScale)),
                    Vector.fromSize(TransformHelper.getSizeFromScale(newScale))
                )
                , 2)
            const correctionVector = Vector.linearMultiply(sizeVector, Vector.subtract(Vector.one(), scaleRatio))
            return Vector.add(Vector.linearMultiply(localPosition, scaleRatio), correctionVector)
        }
        return localPosition
    }

    /**
     * @param {World }world
     * @param {Unit} unit
     * @param {*} body
     * @param {*} bodyPosition
     * @param {*} bodyRotation
     * @return {Vector}
     */
    static getUnitPositionFromPhysics(world, unit, body, bodyPosition, bodyRotation){
        const physicsManager = world.getPhysicsManager()
        const physicsEngine = physicsManager.getPhysicsEngine()
        const transformComponent = unit.getComponent(TransformComponent)

        const actualUnitScale = transformComponent.getScale()
        const actualUnitSize = TransformHelper.getSizeFromScale(actualUnitScale)

        //init result
        let newPosition = GeometryHelper.fromCenterPosition(bodyPosition, bodyRotation, actualUnitSize)

        //first active collider
        const colliderComponents = unit.findComponentsByClass(ColliderComponent)
            .filter(colliderComponent => colliderComponent.isEnabled())
        const firstColliderComponent = colliderComponents[0]

        if (firstColliderComponent) {
            const firstColliderRelativePosition = UnitHelper.getColliderRelativePosition(unit, firstColliderComponent)
            const bodyCollider = physicsEngine.getBodyColliders(body)[0]
            if (bodyCollider) {
                const bodyColliderPosition = new Vector(physicsEngine.getBodyPosition(bodyCollider))
                const actualColliderSize = UnitHelper.getColliderSize(unit, firstColliderComponent)
                const unitColliderPosition = GeometryHelper.fromCenterPosition(bodyColliderPosition,
                    bodyRotation, actualColliderSize)
                const newUnitPosition = Vector.subtract(unitColliderPosition, firstColliderRelativePosition)

                const correctionVector = UnitHelper.GetCorrectionVector(actualUnitSize, actualColliderSize,
                    bodyRotation, firstColliderRelativePosition)
                newPosition = Vector.subtract(newUnitPosition, correctionVector)
            }
        }

        return newPosition
    }

}