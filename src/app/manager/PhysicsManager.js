import MatterEngine from '../physics/engine/matter/MatterEngine.js'
import Vector from '../utils/Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import ColliderComponent from '../component/internal/ColliderComponent.js'
import UnitHelper from '../utils/UnitHelper.js'
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
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForce(unit, position, force) {
        this.physicsEngine.applyForce(unit, position, force)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: *, bodyA: *, bodyB: *, collided: boolean}[]}
     */
    rayCast(unit, start, end) {
        const position = unit.getComponent(TransformComponent).getPosition()
        const size = unit.getComponent(MeshComponent).getSize()
        const bottomPosition = Vector.add(position, new Vector({x: size.getWidth() / 2, y: size.getHeight()}))
        return this.physicsEngine.rayCast(unit, Vector.add(bottomPosition, start), Vector.add(bottomPosition, end))
    }

    /**
     * @param {Unit} unit
     * @return {boolean}
     */
    isGrounded(unit) {
        const startVector = new Vector({x: 0, y: 0})
        const endVector = new Vector({x: 0, y: 1})
        const collisions = this.rayCast(unit, startVector, endVector).filter(collision => collision.collided)
        return !!collisions.length
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
     * @param {number} speed
     */
    moveXAxis(unit, speed) {
        this.setVelocity(unit, new Vector({x: speed, y: this.getVelocity(unit).getY()}))
    }

    /**
     * @return {{unitId: number, body: *}[]}
     */
    getMapBodyUnit() {
        return this.getPhysicsEngine().getMapBodyUnit()
    }

    updateEngine() {
        this.physicsEngine.update()
    }

    /**
     * @param {Unit} unit
     */
    update(unit) {
        this.updateUnit(unit)
    }

    /**
     * @param {Unit} unit
     */
    updateUnit(unit) {
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            // unit component
            const transformComponent = unit.getComponent(TransformComponent)
            const meshComponent = unit.getComponent(MeshComponent)

            // unit/body info
            const bodyRotation = this.physicsEngine.getBodyRotation(body)
            const bodyPosition = new Vector(this.physicsEngine.getBodyPosition(body))
            const actualUnitRotation = transformComponent.getRotation()
            const actualUnitSize = meshComponent.getSize()
            const bodyRotationRounded = Math.round(bodyRotation * 100) / 100

            //init result
            let newPosition = GeometryHelper.fromCenterPosition(bodyPosition, bodyRotationRounded, actualUnitSize)
            let newRotation = bodyRotationRounded

            //first active collider
            const colliderComponents = unit.findComponentsByClass(ColliderComponent)
                .filter(colliderComponent => colliderComponent.isEnabled())
            const firstColliderComponent = colliderComponents[0]
            if(firstColliderComponent){
                const firstColliderRelativePosition = firstColliderComponent.getPosition()
                const bodyCollider = this.physicsEngine.getBodyColliders(body)[0]
                if(bodyCollider){
                    const bodyColliderPosition = new Vector(this.physicsEngine.getBodyPosition(bodyCollider))
                    const actualColliderSize = UnitHelper.getColliderSize(unit, firstColliderComponent)
                    const unitColliderPosition = GeometryHelper.fromCenterPosition(bodyColliderPosition, bodyRotationRounded, actualColliderSize)
                    const newUnitPosition = Vector.subtract(unitColliderPosition, firstColliderRelativePosition)

                    const correctionVector = UnitHelper.GetCorrectionVector(actualUnitSize, actualColliderSize,
                        bodyRotationRounded, firstColliderRelativePosition)
                    newPosition = Vector.subtract(newUnitPosition, correctionVector)
                }
            }

            transformComponent.setPosition(newPosition)
            transformComponent.setRotation(newRotation)
            if (actualUnitRotation !== newRotation) {
                meshComponent.setGenerated(false)
            }
        }
    }

}