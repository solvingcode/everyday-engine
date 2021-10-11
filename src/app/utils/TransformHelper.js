import {SCALE_FACTOR} from '../core/Constant.js'
import Vector from './Vector.js'
import Size from '../pobject/Size.js'
import TransformComponent from '../component/internal/TransformComponent.js'

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
     * @param {Vector} newPosition
     */
    static translateTo(world, unit, newPosition) {
        const physicsManager = world.getPhysicsManager()
        const transformComponent = unit.getComponent(TransformComponent)
        if (physicsManager.hasUnit(unit)) {
            physicsManager.translate(unit, Vector.subtract(newPosition, transformComponent.getPosition()))
        }
        transformComponent.setPosition(_.cloneDeep(newPosition))
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Vector} moveVector
     */
    static translate(world, unit, moveVector) {
        const physicsManager = world.getPhysicsManager()
        const unitManager = world.getUnitManager()
        const transformComponent = unit.getComponent(TransformComponent)
        if (physicsManager.hasUnit(unit)) {
            physicsManager.translate(unit, moveVector)
        }
        transformComponent.setPosition(Vector.add(moveVector, transformComponent.getPosition()))
        unitManager.findChildUnits(unit).forEach(cUnit => {
            this.translate(world, cUnit, moveVector)
        })
    }

}