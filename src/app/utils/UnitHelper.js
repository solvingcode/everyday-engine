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
import LightComponent from '../component/internal/LightComponent.js'
import UIContainerComponent from '../component/internal/ui/UIContainerComponent.js'
import UIButtonUnitInstant from '../unit/instant/type/internal/ui/UIButtonUnitInstant.js'
import UIButtonComponent from '../component/internal/ui/UIButtonComponent.js'
import RectSelectorUnitInstant from '../unit/instant/type/internal/edit/RectSelectorUnitInstant.js'
import CircleSelectorUnitInstant from '../unit/instant/type/internal/edit/CircleSelectorUnitInstant.js'
import GUIPropertyComponent from '../component/internal/gui/property/GUIPropertyComponent.js'
import ScriptHelper from './ScriptHelper.js'
import MaterialType from '../material/MaterialType.js'
import ClientError from '../exception/type/ClientError.js'
import NodeComponent from '../component/internal/gui/node/NodeComponent.js'
import NodeHelper from './NodeHelper.js'
import Color from './Color.js'
import Maths from './Maths.js'
import LightHelper from './LightHelper.js'
import Canvas from '../core/Canvas.js'
import {EEClass} from '../compiler/EEClass.js'

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
        const worldPosition = unit.getComponent(UITransformComponent) ?
            world.getCamera().fromCameraScale(point) : world.getWorldPosition(point)
        return this.isInside(unit, worldPosition)
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
            mesh && renderer.draw(mesh, {
                position: positionToCameraView,
                scale: this.getRelativeScreenScale(camera.toScaleSize(meshComponent.getSize())),
                rotation: this.getRotationVector(transformComponent.getRotation())
            })
        }
    }

    /**
     * @param {Size} size
     * @return {Vector}
     */
    static getRelativeScreenScale(size) {
        const {size: windowSize} = Window.get()
        return Vector.linearDivide(Vector.fromSize(size), Vector.fromSize(windowSize))
    }

    /**
     * @param {number} rotation
     * @return {Vector}
     */
    static getRotationVector(rotation) {
        return new Vector({
            x: Math.sin(rotation),
            y: Math.cos(rotation)
        })
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
                        unitInstantClass = RectSelectorUnitInstant
                        break
                    case PrimitiveShape.CIRCLE:
                        unitInstantClass = CircleSelectorUnitInstant
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
        const style = new Style()
        style.setColor('#ffe600')
        style.setBorderSize(2)

        const selectorUnit = world.createUnitInstant(RectSelectorUnitInstant, Vector.zero(), Vector.one(), style)
        selectorUnit.createComponents([GUISelectorComponent])
        selectorUnit.getComponent(GUISelectorComponent).setUnitId(unit.getId())
        selectorUnit.getComponent(TransformComponent).setLocalRotation(0)
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
                const anchorLocalScale = TransformHelper.getLocalScale(TransformHelper.getScaleFromSize(new Size(anchorSize)), unit)
                const anchorUnit = world.createUnitInstant(RectSelectorUnitInstant, anchorPosition, anchorLocalScale, style)
                anchorUnit.createComponents([GUIAnchorComponent])
                anchorUnit.getComponent(GUIAnchorComponent).setUnitId(unit.getId())
                anchorUnit.getComponent(GUIAnchorComponent).setOffset(index + 1)
            } else {
                const transformComponent = existGUIAnchor.getComponent(TransformComponent)
                const newLocalPosition = TransformHelper.getLocalPosition(anchorPosition, unit)
                if (!ObjectHelper.isEqual(transformComponent.getLocalPosition(), newLocalPosition)) {
                    transformComponent.setLocalPosition(newLocalPosition)
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
        if (parentUnit) {
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
    }

    /**
     * @param {World} world
     * @param {Storage} storage
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     * @param {Vector} direction
     * @param {Vector} step
     */
    static moveUnits(world, storage, mouse, selectedUnits, direction, step = null) {
        const camera = world.getCamera()
        const dragArea = step || mouse.dragAndDrop(camera)
        const dragAreaDirection = new Vector({
            x: dragArea.x * direction.x,
            y: dragArea.y * direction.y
        })
        selectedUnits.map(unit => {
            if (unit.hasComponentsByClasses([LightComponent])) {
                unit.findComponentByClass(LightComponent).setGenerated(false)
            }
            const transformComponent = unit.getComponent(TransformComponent)
            const uiTransformComponent = unit.getComponent(UITransformComponent)
            const localPosition = transformComponent.getLocalPosition()
            UnitHelper.updateOrRecordComponent(world, unit, transformComponent, TransformComponent.prototype.setLocalPosition,
                Vector.add(localPosition, dragAreaDirection), storage)
            if (uiTransformComponent) {
                uiTransformComponent.setLastAnchorMin(null)
                uiTransformComponent.setLastAnchorMax(null)
            }
        })
    }

    /**
     * @param {World} world
     * @param {Mouse} mouse
     * @param {Unit} unit
     * @param {Vector} direction
     * @param {Vector} step
     */
    static moveCollider(world, mouse, unit, direction, step = null) {
        const camera = world.getCamera()
        const dragArea = step || mouse.dragAndDrop(camera)
        const dragAreaDirection = new Vector({
            x: dragArea.x * direction.x,
            y: dragArea.y * direction.y
        })
        const colliderComponent = UnitHelper.getColliderEditing(unit)
        const position = colliderComponent.getPosition()
        colliderComponent.setPosition(Vector.add(position, dragAreaDirection))
    }

    /**
     * @param {Canvas} canvas
     * @param {Camera} camera
     * @param {MeshComponent} meshComponent
     * @return {Canvas}
     */
    static generateImageRepeat(canvas, camera, meshComponent) {
        const meshSize = meshComponent.getSize()
        const imageScale = meshComponent.getImageScale()
        const imagePosition = meshComponent.getImagePosition()
        const imageRepeatAreaMin = meshComponent.getImageRepeatAreaMin()
        const imageRepeatAreaMax = meshComponent.getImageRepeatAreaMax()
        const canvasBgRepeat = ImageHelper.generateImageRepeat(canvas, meshSize, imageScale, imagePosition,
            imageRepeatAreaMin, imageRepeatAreaMax, meshComponent.getFilter())
        const canvasCameraScale = camera.toScaleSize(new Size({
            width: canvasBgRepeat.width,
            height: canvasBgRepeat.height
        }))
        return ImageHelper.resizeCanvasBySize(canvasBgRepeat, canvasCameraScale, true, meshComponent.getFilter())
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
     * @param {Unit} unit
     * @param {Component} component
     * @param {Function} setter
     * @param {*} value
     * @param {Storage} storage
     */
    static updateOrRecordComponent(world, unit, component, setter, value, storage) {
        const animationManager = world.getAnimationManager()
        const animation = animationManager.getAnimationRecording()
        if (animation) {
            const unitRecording = animationManager.getUnitRecording()
            const animationComponent = unitRecording.getComponent(AnimationComponent)
            const childUnit = unitRecording !== unit ? unit : null
            const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
            const cloneComponent = _.cloneDeep(component)
            const attributeName = ClassHelper.getAttributeFromSetter(setter)
            setter.bind(cloneComponent)(value)
            animation.setFrame(animationComponent.getTime(), childUnit, cloneComponent.getName(), attributeName,
                cloneComponent.get(attributeName))
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
        const meshComponent = unit.getComponent(MeshComponent)
        if (this.hasPhysics(world, unit)) {
            physicsManager.setPosition(unit, position)
        } else {
            transformComponent.setPosition(position, true)
        }
        if (meshComponent) {
            if (meshComponent.getMaterial() === MaterialType.LIGHT) {
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     */
    static forceSetPosition(unit, position) {
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if (transformComponent) {
            transformComponent.setPosition(position, true)
        }
        if (meshComponent) {
            if (meshComponent.getMaterial() === MaterialType.LIGHT) {
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @param {Unit} unit
     * @param {number} rotation
     */
    static forceSetRotation(unit, rotation) {
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if (transformComponent) {
            transformComponent.setRotation(rotation, true)
        }
        if (meshComponent) {
            meshComponent.setGenerated(false)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} scale
     */
    static setScale(world, unit, scale) {
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setScale(Vector.linearMultiply(scale, transformComponent.getAxis()), true)
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {Vector}
     */
    static getAxisLocalPosition(world, unit) {
        const defaultAxis = Vector.one()
        const unitManager = world.getUnitManager()
        const physicsManager = world.getPhysicsManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const transformComponent = unit.getComponent(TransformComponent)
        const localPosition = transformComponent.getLocalPosition()
        const scale = transformComponent.getScale()
        const size = TransformHelper.getSizeFromScale(scale)
        const rotation = this.hasPhysics(world, unit) ?
            physicsManager.getPhysicsEngine().getRotation(unit) : transformComponent.getRotation()
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const actualAxis = TransformHelper.getAxis(parentUnit)
                const parentScale = parentTransformComponent.getScale()
                const scaleRatio = Vector.linearDivide(actualAxis, defaultAxis)
                const sizeVector = Vector.divide(
                    Vector.subtract(
                        Vector.fromSize(TransformHelper.getSizeFromScale(parentScale)),
                        Vector.fromSize(GeometryHelper.getLargestRectangle(rotation, size))
                    )
                    , 2)
                const correctionVector = Vector.linearMultiply(sizeVector, Vector.subtract(Vector.one(), scaleRatio))
                return Vector.add(Vector.linearMultiply(localPosition, scaleRatio), correctionVector)
            }
        }
        return localPosition
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {number}
     */
    static getAxisLocalRotation(world, unit) {
        const defaultAxis = Vector.one()
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const transformComponent = unit.getComponent(TransformComponent)
        const localRotation = transformComponent.getLocalRotation()
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const actualAxis = TransformHelper.getAxis(parentUnit)
                const scaleRatio = Vector.linearDivide(actualAxis, defaultAxis)
                return localRotation * scaleRatio.getX()
            }
        }
        return localRotation
    }

    /**
     * @param {World }world
     * @param {Unit} unit
     * @param {*} body
     * @param {*} bodyPosition
     * @param {*} bodyRotation
     * @return {Vector}
     */
    static getUnitPositionFromPhysics(world, unit, body, bodyPosition, bodyRotation) {
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

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} position
     */
    static setWorldPosition(world, unit, position) {
        const parentUnit = world.getUnitManager().findParentUnit(unit)
        if (parentUnit) {
            const parentPosition = parentUnit.getComponent(TransformComponent).getPosition()
            unit.getComponent(TransformComponent).setLocalPosition(Vector.subtract(position, parentPosition))
        } else {
            unit.getComponent(TransformComponent).setLocalPosition(position)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} centerPosition
     */
    static setCenterWorldPosition(world, unit, centerPosition) {
        const parentUnit = world.getUnitManager().findParentUnit(unit)
        const position = this.fromCenterPosition(unit, centerPosition)
        if (parentUnit) {
            const parentPosition = parentUnit.getComponent(TransformComponent).getPosition()
            unit.getComponent(TransformComponent).setLocalPosition(Vector.subtract(position, parentPosition))
        } else {
            unit.getComponent(TransformComponent).setLocalPosition(position)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {Animation[]}
     */
    static getAnimations(world, unit) {
        const animationController = this.getAnimationController(world, unit)
        if (animationController) {
            return ScriptHelper.getAnimations(animationController, world)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Animation} animation
     */
    static hasAnimation(world, unit, animation) {
        return !!this.getAnimations(world, unit).find(pAnimation => pAnimation === animation)
    }

    /**
     * @param {World} world
     * @param {Animation} animation
     * @return {Unit}
     */
    static getAnimationUnit(world, animation) {
        return world.getAnimationManager().getUnitRecording()
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @return {number}
     */
    static getOpacity(unit, world) {
        const meshComponent = unit.getComponent(MeshComponent)
        if (meshComponent) {
            const opacity = parseFloat(meshComponent.getStyle().getOpacity())
            const parentUnit = world.getUnitManager().findParentUnit(unit)
            if (parentUnit) {
                const parentMeshComponent = parentUnit.getComponent(MeshComponent)
                if (parentMeshComponent) {
                    const parentOpacity = parseFloat(meshComponent.getStyle().getOpacity())
                    return opacity * parentOpacity
                }
            }
            return opacity
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    static getUIContainer(world, unit) {
        if (unit) {
            if (unit.getComponent(UIContainerComponent)) {
                return unit
            } else {
                return this.getUIContainer(world, world.getUnitManager().findParentUnit(unit))
            }
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {boolean}
     */
    static isIntractableButton(world, unit) {
        if (unit instanceof UIButtonUnitInstant) {
            return unit.getComponent(UIButtonComponent).getIntractable()
        }
        return false
    }

    /**
     * @param {Unit[]} units
     * @param {Unit} unit
     */
    static sortUnit(units, unit) {
        const indexUnit = units.findIndex(pUnit => pUnit === unit)
        const rank = unit.getComponent(GUIPropertyComponent).getRank()
        units.splice(indexUnit, 1)
        const indexBiggerRank = units.findIndex(pUnit => pUnit.getComponent(GUIPropertyComponent).getRank() > rank)
        if (indexBiggerRank >= 0) {
            units.splice(indexBiggerRank, 0, unit)
        } else {
            units.splice(indexUnit, 0, unit)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {Vector}
     */
    static getParentScale(world, unit) {
        const parentUnit = world.getUnitManager().findParentUnit(unit)
        let parentScale = Vector.one()
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const parentTempScale = parentTransformComponent.getScale()
                if (parentTempScale.getX() !== 0 && parentTempScale.getY() !== 0) {
                    parentScale = parentTempScale
                }
            }
        }
        return parentScale
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    static reserveTransform(world, unit) {
        const transformComponent = unit.getComponent(TransformComponent)
        if (transformComponent) {
            this.setWorldPosition(world, unit, transformComponent.getPosition())
        }
    }

    /**
     * @param {Camera} camera
     * @param {MeshComponent} meshComponent
     * @param transformComponent
     * @return {Size}
     */
    static getScaleSize(camera, meshComponent, transformComponent) {
        return camera.toScaleSize(meshComponent.getSize())
    }

    /**
     * @param {World} world
     * @param {Camera} camera
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @return {{center: Vector, context: CanvasRenderingContext2D, scaleSize: Size}}
     */
    static init2dCanvas(world, camera, meshComponent, transformComponent) {
        const scaleSize = this.getScaleSize(camera, meshComponent, transformComponent)
        const rotation = transformComponent.getRotation()
        const {width, height} = GeometryHelper.getLargestRectangle(rotation, scaleSize)
        if (width > 0 && height > 0) {
            const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
            const canvas = new Canvas(width, height)
            const context = canvas.getContext('2d')
            const {
                opacity, borderSize, fillColor,
                color, fillColorOpacity, colorOpacity,
                shadowColor, shadowPosition, shadowBlur,
                gradientColorAssetId
            } = meshComponent.getStyle()
            context.strokeStyle = Color.hexToRgba(color, colorOpacity)
            const gradientColorAsset = world.getAssetsManager().findAssetById(gradientColorAssetId)
            if (gradientColorAsset) {
                const gradientColor = gradientColorAsset.getType().getData()
                const linearGradient = context.createLinearGradient(
                    scaleSize.width / 2, 0, scaleSize.width / 2, scaleSize.height)
                gradientColor.getColors().forEach(colorStop => {
                    linearGradient.addColorStop(colorStop.getOffset(), colorStop.getColor())
                })
                context.fillStyle = linearGradient
            } else if (fillColor) {
                context.fillStyle = Color.hexToRgba(fillColor, fillColorOpacity)
            }
            if (shadowColor) {
                context.shadowColor = shadowColor
                context.shadowBlur = camera.toScaleNumber(shadowBlur)
                context.shadowOffsetX = camera.toScaleNumber(shadowPosition.getX())
                context.shadowOffsetY = camera.toScaleNumber(shadowPosition.getY())
            }
            if (_.isNumber(parseFloat(opacity))) {
                context.globalAlpha = parseFloat(opacity)
            }
            context.lineWidth = camera.toScaleNumber(borderSize || 1)
            context.translate(width / 2, height / 2)
            context.rotate(rotation)
            context.translate(-center.x, -center.y)
            return {context, center, scaleSize}
        }
    }

    /**
     * @param {CanvasRenderingContext2D} context
     * @param {TextComponent} textComponent
     * @param {Size} size
     * @param {Camera} camera
     * @param {World} world
     */
    static drawText(context, textComponent, size, camera, world) {
        const assetManager = world.getAssetsManager()
        const textAlign = textComponent.getTextAlign()
        const verticalAlign = textComponent.getVerticalAlign()
        const textStyle = textComponent.getTextStyle()
        const fontFamilyAsset = textComponent.getFontFamily() && assetManager.findAssetFontById(textComponent.getFontFamily())
        const fontFamily = (fontFamilyAsset && fontFamilyAsset.getName()) || 'Arial'
        const {width, height} = size
        const text = textComponent.getText()
        const fontSize = textComponent.getFontSize()
        const fontSizeScale = camera.toScaleNumber(fontSize)
        let xPos = 0
        let yPos = height / 2
        const fontProps = [...(textStyle || []), `${fontSizeScale}px`, fontFamily]

        if (textAlign) {
            switch (textAlign) {
                case 'left':
                    context.textAlign = 'left'
                    break
                case 'center':
                    context.textAlign = 'center'
                    xPos = width / 2
                    break
                case 'right':
                    context.textAlign = 'right'
                    xPos = width
                    break
                default:
                    throw new ClientError(`${this.constructor.name}: Text Alignment "${textAlign}" not supported`)
            }
        }

        if (verticalAlign) {
            switch (verticalAlign) {
                case 'top':
                    context.textBaseline = 'bottom'
                    break
                case 'middle':
                    context.textBaseline = 'middle'
                    break
                case 'bottom':
                    context.textBaseline = 'top'
                    break
                default:
                    throw new ClientError(`${this.constructor.name}: Vertical Alignment "${verticalAlign}" not supported`)
            }
        }

        context.font = fontProps.join(' ')
        context.fillText(text, xPos, yPos)
    }

    /**
     * @TODO: need some refactoring
     * @param {CanvasRenderingContext2D} context
     * @param {Unit} unit
     * @param {Size} size
     * @param {Camera} camera
     */
    static drawNode(context, unit, size, camera) {
        const nodeComponent = unit.getComponent(NodeComponent)
        const title = nodeComponent.getTitle()
        const type = nodeComponent.getType()
        const inputs = nodeComponent.getInputs()
        const outputs = nodeComponent.getOutputs()
        const inputConnections = nodeComponent.getInputConnections()
        const outputConnections = nodeComponent.getOutputConnections()
        const inputColors = nodeComponent.getInputColors()
        const isOutputConnected = nodeComponent.getOutputConnected()
        const isBaseInputConnected = nodeComponent.getBaseInputConnected()
        const isBaseOutputConnected = nodeComponent.getBaseOutputConnected()
        const nodeBaseInputColor = nodeComponent.getBaseInputColor()
        const hasBaseInput = nodeComponent.getBaseInput()
        const hasBaseOutput = nodeComponent.getBaseOutput()
        const output = nodeComponent.getOutput()
        const {width, height} = size

        //props
        const {
            sizeInput, fontSize, heightHead,
            shadowBlur, boxColor, baseInputColor,
            fontColor, headColor, padding,
            colorFocused, selectColor, fontSizeRatio
        } = NodeHelper.getNodeGUIProps(type)

        //convert props to camera scale
        const heightHeadScale = camera.toScaleNumber(heightHead)
        const fontSizeScale = camera.toScaleNumber(fontSize)
        const paddingScale = camera.toScaleNumber(padding)
        const sizeInputScale = camera.toScaleNumber(sizeInput)
        const borderSize = camera.toScaleNumber(3)

        // box
        let shadowColor = headColor
        if (unit.isSelected()) {
            shadowColor = selectColor
        } else if (unit.isFocused()) {
            shadowColor = colorFocused
        }
        context.shadowColor = shadowColor
        context.shadowBlur = shadowBlur
        context.fillStyle = boxColor
        context.lineWidth = borderSize
        context.strokeStyle = unit.isSelected() ? selectColor : headColor
        context.rect(0, 0, width, height)
        context.fill()
        context.stroke()
        context.shadowColor = null
        context.shadowBlur = 0

        //box header
        context.fillStyle = headColor
        context.fillRect(borderSize / 2, borderSize / 2, width - borderSize, heightHeadScale - borderSize)

        //box header title
        context.font = `${fontSizeScale}px Arial`
        context.fillStyle = fontColor
        context.fillText(title, paddingScale, fontSizeScale + paddingScale)

        //base input
        if (hasBaseInput) {
            const {position: baseInputPosition} = NodeHelper.getNodeGUIInput(type, -1)
            const baseInputPositionScale = camera.toCameraScale(baseInputPosition)
            context.fillStyle = (nodeBaseInputColor && Color.shadeColor(nodeBaseInputColor, 100)) || baseInputColor
            context.strokeStyle = baseInputColor
            context.lineWidth = camera.toScaleNumber(1)
            context.beginPath()
            context.moveTo(baseInputPositionScale.getX(), baseInputPositionScale.getY())
            context.lineTo(baseInputPositionScale.getX() + sizeInputScale, baseInputPositionScale.getY() + sizeInputScale / 2)
            context.lineTo(baseInputPositionScale.getX(), baseInputPositionScale.getY() + sizeInputScale)
            context.closePath()
            if (isBaseInputConnected) {
                context.fill()
            } else {
                context.stroke()
            }
        }

        //other inputs
        inputs.forEach((input, index) => {
            const {position: inputPosition} = NodeHelper.getNodeGUIInput(type, index - (hasBaseInput ? 0 : 1))
            const inputPositionScale = camera.toCameraScale(inputPosition)
            const inputColor = inputColors[index] || headColor
            context.fillStyle = Color.shadeColor(inputColor, 100)
            context.strokeStyle = inputColor
            context.lineWidth = camera.toScaleNumber(1)
            if (inputConnections[index]) {
                context.fillRect(inputPositionScale.getX(), inputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(inputPositionScale.getX(), inputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
            context.fillStyle = fontColor
            context.fillText(input,
                inputPositionScale.getX() + sizeInputScale + paddingScale,
                inputPositionScale.getY() + sizeInputScale)
        })

        //result output
        if (output) {
            const {
                position: outputPosition
            } = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(size),
                1 - (!hasBaseOutput ? 1 : 0))
            const outputPositionScale = camera.toCameraScale(outputPosition)
            context.fillStyle = Color.shadeColor(headColor, 100)
            context.strokeStyle = headColor
            context.lineWidth = camera.toScaleNumber(1)
            if (isOutputConnected) {
                context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
        }

        //custom outputs
        const widthOutput = camera.toScaleNumber(Math.max(...outputs.map(customOutput => customOutput.length * fontSize / fontSizeRatio)))
        outputs.forEach((customOutput, index) => {
            const {position: outputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(size),
                index + 1 - (!hasBaseOutput ? 1 : 0))
            const outputPositionScale = camera.toCameraScale(outputPosition)
            const outputColor = headColor
            context.fillStyle = Color.shadeColor(outputColor, 100)
            context.strokeStyle = outputColor
            context.lineWidth = camera.toScaleNumber(1)
            if (outputConnections[index]) {
                context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
            const textCanvas = new Canvas(widthOutput, sizeInputScale)
            const textContext = textCanvas.getContext('2d')
            textContext.font = `${fontSizeScale}px Arial`
            textContext.fillStyle = fontColor
            textContext.textAlign = 'right'
            textContext.fillText(customOutput, widthOutput - paddingScale, sizeInputScale)
            context.drawImage(textCanvas,
                outputPositionScale.getX() - sizeInputScale + paddingScale - widthOutput,
                outputPositionScale.getY())
        })

        //base output
        if (hasBaseOutput) {
            const {position: baseOutputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(size), 0)
            const baseOutputPositionScale = camera.toCameraScale(baseOutputPosition)
            context.fillStyle = baseInputColor
            context.strokeStyle = baseInputColor
            context.lineWidth = camera.toScaleNumber(1)
            context.beginPath()
            context.moveTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY())
            context.lineTo(baseOutputPositionScale.getX() + sizeInputScale, baseOutputPositionScale.getY() + sizeInputScale / 2)
            context.lineTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY() + sizeInputScale)
            context.closePath()
            if (isBaseOutputConnected) {
                context.fill()
            } else {
                context.stroke()
            }
        }
    }

    /**
     * @param {CanvasRenderingContext2D} context
     * @param {LightPointComponent} lightComponent
     * @param {Vector} center
     * @param {Size} size
     * @param {Camera} camera
     */
    static drawLight(context, lightComponent, center, size, camera) {
        const outerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const sw = size.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)

        //calculate light boundaries
        const outerLightBounds = LightHelper.getLightBounds(center, outerAngle, radiusScale)
        const innerLightBounds = LightHelper.getLightBounds(center, innerAngle, radiusScale)

        LightHelper.drawOuterLightBounds(context, outerLightBounds, radiusScale, outerAngle)
        context.stroke()
        LightHelper.drawInnerLightBounds(context, outerLightBounds.first, innerLightBounds.first, radiusScale)
        context.stroke()
        LightHelper.drawInnerLightBounds(context, outerLightBounds.second, innerLightBounds.second, radiusScale)
        context.stroke()

        //circle bulb
        const sizeBulb = camera.toScaleNumber(10)
        context.beginPath()
        context.arc(center.x, center.y, sizeBulb, 0, Math.PI * 2)
        context.closePath()
        context.fillStyle = 'rgba(255,255,247,0.71)'
        context.fill()
    }

    /**
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     */
    static initScript(unit, scriptComponent) {
        const className = scriptComponent.getScript()
        if (!scriptComponent.getCompiledClass()) {
            scriptComponent.setCompiledClass(new EEClass[className]())
        }
        const classCompiled = scriptComponent.getCompiledClass()
        for (const attribute in classCompiled) {
            if (typeof classCompiled[attribute] !== 'function' && attribute !== 'unit' && attribute !== 'component') {
                classCompiled[attribute] = scriptComponent.getValue(attribute)
            }
        }
        classCompiled.unit = unit
        classCompiled.component = scriptComponent
    }

}