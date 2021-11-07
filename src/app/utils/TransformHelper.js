import {SCALE_FACTOR} from '../core/Constant.js'
import Vector from './Vector.js'
import Size from '../pobject/Size.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import GeometryHelper from './GeometryHelper.js'

export default class TransformHelper {

    /**
     * @param {Size} size
     * @return {Vector}
     */
    static getScaleFromSize(size) {
        return new Vector({
            x: size.width / SCALE_FACTOR,
            y: size.height / SCALE_FACTOR
        })
    }

    /**
     * @param {Vector} scale
     * @return {Size}
     */
    static getSizeFromScale(scale) {
        return new Size({
            width: Math.abs(scale.getX() * SCALE_FACTOR),
            height: Math.abs(scale.getY() * SCALE_FACTOR)
        })
    }

    /**
     * @param {Vector} scale
     * @return {Vector}
     */
    static getScaleDirection(scale) {
        return Vector
            .linearDivide(scale, Vector.abs(scale))
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} moveVector
     */
    static translate(world, unit, moveVector) {
        const physicsManager = world.getPhysicsManager()
        const unitManager = world.getUnitManager()
        const childUnits = unitManager.findChildUnits(unit)
        const transformComponent = unit.getComponent(TransformComponent)
        if (physicsManager.hasUnit(unit)) {
            physicsManager.translate(unit, moveVector)
            childUnits.forEach(cUnit => {
                if (physicsManager.hasUnit(cUnit)) {
                    physicsManager.translate(cUnit, moveVector)
                }
            })
        } else {
            const newLocalPosition = Vector.add(moveVector, transformComponent.getLocalPosition())
            transformComponent.setLocalPosition(newLocalPosition)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {number} angle
     */
    static rotate(world, unit, angle) {
        const physicsManager = world.getPhysicsManager()
        const unitManager = world.getUnitManager()
        const childUnits = unitManager.findChildUnits(unit)
        const transformComponent = unit.getComponent(TransformComponent)
        if (physicsManager.hasUnit(unit)) {
            physicsManager.rotate(unit, angle)
            childUnits.forEach(cUnit => {
                if (physicsManager.hasUnit(cUnit)) {
                    physicsManager.rotate(cUnit, angle)
                }
            })
        } else {
            const newLocalRotation = angle + transformComponent.getLocalRotation()
            transformComponent.setLocalRotation(newLocalRotation)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {number} angle
     * @return {Vector}
     */
    static getCorrectionTranslateVector(world, unit, angle) {
        const transformComponent = unit.getComponent(TransformComponent)
        const size = this.getSizeFromScale(transformComponent.getScale())
        const vertices = GeometryHelper.loadVertices(size)
        const rotateVertices = GeometryHelper.rotateVertices(vertices, angle, size)
        return Vector.subtract(rotateVertices[0], vertices[0])
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} localScale
     */
    static scaleTo(world, unit, localScale) {
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setLocalScale(localScale)
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
     * @param {Vector} position
     * @param {Unit} parent
     * @return {Vector}
     */
    static getLocalPosition(position, parent) {
        if (parent) {
            const transformComponent = parent.getComponent(TransformComponent)
            if (transformComponent) {
                return Vector.subtract(position, transformComponent.getPosition())
            }
        }
        return position
    }

    /**
     * @param {number} rotation
     * @param {Unit} parent
     * @return {number}
     */
    static getLocalRotation(rotation, parent) {
        if (parent && parent.getComponent(TransformComponent)) {
            const transformComponent = parent.getComponent(TransformComponent)
            return (rotation - transformComponent.getRotation()) % (Math.PI * 2)
        }
        return rotation
    }

    /**
     * @param {Vector} scale
     * @param {Unit} parent
     * @return {Vector}
     */
    static getLocalScale(scale, parent) {
        if (parent && parent.getComponent(TransformComponent)) {
            const transformComponent = parent.getComponent(TransformComponent)
            return Vector.linearDivide(scale, transformComponent.getScale())
        }
        return scale
    }

}