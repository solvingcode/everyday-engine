import MatterEngine from '../physics/engine/matter/MatterEngine.js'
import Vector from '../utils/Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import ColliderComponent from '../component/internal/ColliderComponent.js'
import UnitHelper from '../utils/UnitHelper.js'
import GeometryHelper from '../utils/GeometryHelper.js'
import RigidBodyComponent from '../component/internal/RigidBodyComponent.js'

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
     * @param {World} world
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {Vector} distance
     * @param {MaskGroup} maskGroup
     * @return {ColliderComponent[]}
     */
    boxCast(world, unit, colliderComponent, distance, maskGroup){
        const position = UnitHelper.getColliderPosition(unit, colliderComponent)
        const size = UnitHelper.getColliderSize(unit, colliderComponent)
        const boxNewPosition = [
            distance,
            Vector.add(distance, new Vector({x: size.getWidth() })),
            Vector.add(distance, new Vector({x: size.getWidth(), y: size.getHeight()})),
            Vector.add(distance, new Vector({ y: size.getHeight()}))
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
    getAllCollision(world, unit, colliderComponent, maskGroup){
        const maskGroupUnits = world.getUnitManager().findUnitsByMaskGroup(maskGroup)
        const sourceColliderUnit = { unit, colliderComponent }
        const targetColliderUnits = []
        maskGroupUnits.forEach(maskGroupUnit => {
            maskGroupUnit.findComponentsByClass(ColliderComponent).forEach(maskColliderComponent => {
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
    setPosition(unit, position){
        this.physicsEngine.setPosition(unit, position)
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
    moveXYAxis(unit, moveVector){
        this.setVelocity(unit, moveVector)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     */
    translate(unit, position){
        const body = this.physicsEngine.findBody(unit)
        if (body) {
            const bodyPosition = new Vector(this.physicsEngine.getBodyPosition(body))
            const transformComponent = unit.getComponent(TransformComponent)
            const actualPosition = transformComponent.getPosition()
            const actualDiff = Vector.subtract(bodyPosition, actualPosition)
            const newPosition = Vector.add(position, actualDiff)
            this.setPosition(unit, newPosition)
        }
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
    deleteUnit(unit){
        this.physicsEngine.deleteUnit(unit)
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
            const rigidBodyComponent = unit.getComponent(RigidBodyComponent)

            // unit/body info
            const bodyRotation = this.physicsEngine.getBodyRotation(body)
            const bodyVelocity = this.physicsEngine.getVelocity(unit)
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
                const firstColliderRelativePosition = UnitHelper.getColliderRelativePosition(unit, firstColliderComponent)
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

            //save velocity
            colliderComponents.forEach(colliderComponent => {
                colliderComponent.setVelocity(bodyVelocity)
            })
            if(rigidBodyComponent){
                rigidBodyComponent.setVelocity(bodyVelocity)
            }

            transformComponent.setPosition(newPosition)
            transformComponent.setRotation(newRotation)
            if (actualUnitRotation !== newRotation) {
                meshComponent.setGenerated(false)
            }
        }
    }

}