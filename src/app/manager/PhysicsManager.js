import MatterEngine from '../physics/engine/matter/MatterEngine.js'
import Vector from '../utils/Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import ColliderComponent from '../component/internal/ColliderComponent.js'
import UnitHelper from '../utils/UnitHelper.js'
import RigidBodyComponent from '../component/internal/RigidBodyComponent.js'
import GeometryHelper from '../utils/GeometryHelper.js'

export default class PhysicsManager {

    /**
     * @type {PhysicsEngine}
     */
    physicsEngine

    constructor() {
        this.physicsEngine = new MatterEngine()
    }

    init() {
        this.physicsEngine.init()
    }

    clear() {
        if (this.physicsEngine.getInstance()) {
            this.physicsEngine.clear()
        }
    }

    /**
     * @return {PhysicsEngine}
     */
    getPhysicsEngine() {
        return this.physicsEngine
    }

    /**
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     */
    addBody(unit, options) {
        this.physicsEngine.addBody(unit, options)
    }

    /**
     * @param {Unit} unit
     * @return {boolean}
     */
    hasUnit(unit) {
        if (this.physicsEngine.getInstance()) {
            return !!this.physicsEngine.findBody(unit)
        }
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForce(unit, position, force) {
        this.physicsEngine.applyForce(unit, position, force)
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {Vector} distance
     * @param {MaskGroup} maskGroup
     * @return {ColliderComponent[]}
     */
    boxCast(world, unit, colliderComponent, distance, maskGroup) {
        const position = UnitHelper.getColliderPosition(unit, colliderComponent)
        const size = UnitHelper.getColliderSize(unit, colliderComponent)
        const boxNewPosition = [
            distance,
            Vector.add(distance, new Vector({x: size.getWidth()})),
            Vector.add(distance, new Vector({x: size.getWidth(), y: size.getHeight()})),
            Vector.add(distance, new Vector({y: size.getHeight()}))
        ]
        const collisions = boxNewPosition.reduce((pValue, cValue) =>
            [...pValue, ...this.physicsEngine.rayCast(unit, position, Vector.add(position, cValue))], [])
        const colliderIds = _.uniq(collisions.reduce((pValue, cValue) =>
            [...pValue, ...this.physicsEngine.getColliderIdsFromCollision(cValue)], []))
        const units = world.getUnitManager().findUnitsByComponentIds(colliderIds)
            .filter(pUnit => pUnit.getMaskGroupId() === maskGroup.getId())
        return units.reduce((pValue, cValue) => [
            ...pValue,
            ...colliderIds.map(colliderId => cValue.findComponentById(colliderId)).filter(result => result)
        ], [])
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: *, bodyA: *, bodyB: *, collided: boolean}[]}
     */
    rayCast(unit, colliderComponent, start, end) {
        const position = UnitHelper.getColliderPosition(unit, colliderComponent)
        const size = UnitHelper.getColliderSize(unit, colliderComponent)
        const bottomPosition = Vector.add(position, new Vector({x: size.getWidth() / 2, y: size.getHeight()}))
        return this.physicsEngine.rayCast(unit, Vector.add(bottomPosition, start), Vector.add(bottomPosition, end))
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {boolean}
     */
    isGrounded(unit, colliderComponent) {
        const startVector = new Vector({x: 0, y: 0})
        const endVector = new Vector({x: 0, y: 1})
        const collisions = this.rayCast(unit, colliderComponent, startVector, endVector)
            .filter(collision => collision.collided)
        return !!collisions.length
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {MaskGroup} maskGroup
     * @return {ColliderComponent[]}
     */
    getAllCollision(world, unit, colliderComponent, maskGroup) {
        const maskGroupUnits = maskGroup ? world.getUnitManager().findUnitsByMaskGroup(maskGroup)
            : world.getUnitManager().getUnits()
        const sourceColliderUnit = {unit, colliderComponent}
        const targetColliderUnits = []
        maskGroupUnits.forEach(maskGroupUnit => {
            maskGroupUnit.findComponentsByClass(ColliderComponent)
                .filter(component => component.isEnabled())
                .forEach(maskColliderComponent => {
                    targetColliderUnits.push({unit: maskGroupUnit, colliderComponent: maskColliderComponent})
                })
        })
        return this.physicsEngine.getAllCollision(sourceColliderUnit, targetColliderUnits)
    }

    /**
     * @param {Unit} unit
     * @param {number} friction
     */
    setFriction(unit, friction) {
        this.physicsEngine.setFriction(unit, friction)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    getVelocity(unit) {
        return this.physicsEngine.getVelocity(unit)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} velocity
     */
    setVelocity(unit, velocity) {
        this.physicsEngine.setVelocity(unit, velocity)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     */
    setPosition(unit, position) {
        const physicsRotation = this.physicsEngine.getRotation(unit)
        const scale = unit.getComponent(TransformComponent).getScale()
        const physicsPosition = GeometryHelper.convertToCenterPosition(position, physicsRotation, scale)
        this.physicsEngine.setPosition(unit, physicsPosition)
    }

    /**
     * @param {Unit} unit
     * @param {number} speed
     */
    moveXAxis(unit, speed) {
        this.setVelocity(unit, new Vector({x: speed, y: this.getVelocity(unit).getY()}))
    }

    /**
     * @param {Unit} unit
     * @param {Vector} moveVector
     */
    moveXYAxis(unit, moveVector) {
        this.setVelocity(unit, moveVector)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} moveVector
     */
    translate(unit, moveVector) {
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            this.physicsEngine.translate(body, moveVector)
        }
    }

    /**
     * @param {Unit} unit
     * @param {Vector} scale
     */
    scale(unit, scale) {
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            this.physicsEngine.scale(body, scale)
        }
    }

    /**
     * @param {Unit} unit
     * @param {number} angle
     */
    rotate(unit, angle) {
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            this.physicsEngine.rotate(body, angle)
        }
    }

    /**
     * @param {Unit} unit
     * @param {number} angle
     */
    setRotation(unit, angle) {
        this.physicsEngine.setRotation(unit, angle)
    }

    updateEngine() {
        this.physicsEngine.update()
    }

    /**
     * @param {World} world
     */
    clean(world) {
        this.physicsEngine.getBodies().forEach(body => {
            const unitId = this.physicsEngine.getUnitId(body)
            if (!world.getUnitManager().findUnitById(unitId)) {
                this.physicsEngine.deleteBody(body)
            }
        })
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    update(world, unit) {
        this.updateUnit(world, unit)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        this.physicsEngine.deleteUnit(unit)
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    updateUnit(world, unit) {
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            const transformComponent = unit.getComponent(TransformComponent)
            const rigidBodyComponent = unit.getComponent(RigidBodyComponent)
            const colliderComponents = unit.findComponentsByClass(ColliderComponent)

            const bodyPosition = new Vector(this.physicsEngine.getBodyPosition(body))
            const bodyRotation = this.physicsEngine.getBodyRotation(body)
            const bodyVelocity = this.physicsEngine.getVelocity(unit)

            const physicsPosition = UnitHelper.getUnitPositionFromPhysics(world, unit, body, bodyPosition, bodyRotation)
            const physicsRotation = bodyRotation
            const actualPosition = transformComponent.getPosition()
            const actualUnitRotation = transformComponent.getRotation()

            colliderComponents.forEach(colliderComponent => {
                colliderComponent.setVelocity(bodyVelocity)
            })
            if (rigidBodyComponent) {
                rigidBodyComponent.setVelocity(bodyVelocity)
            }
            if (!actualPosition.equals(physicsPosition)) {
                UnitHelper.forceSetPosition(unit, physicsPosition)
            }
            if (actualUnitRotation !== physicsRotation) {
                UnitHelper.forceSetRotation(unit, physicsRotation)
            }
        }
    }

}