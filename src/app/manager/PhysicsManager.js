import MatterEngine from '../physics/engine/matter/MatterEngine.js'
import Vector from '../utils/Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import MeshComponent from '../component/internal/MeshComponent.js'

export default class PhysicsManager {

    /**
     * @type {PhysicsEngine}
     */
    physicsEngine

    constructor() {
        this.physicsEngine = new MatterEngine()
    }

    init(){
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
    applyForce(unit, position, force){
        this.physicsEngine.applyForce(unit, position, force)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    getVelocity(unit){
        return this.physicsEngine.getVelocity(unit)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} velocity
     */
    setVelocity(unit, velocity){
        this.physicsEngine.setVelocity(unit, velocity)
    }

    /**
     * @param {Unit} unit
     * @param {number} speed
     */
    moveXAxis(unit, speed){
        this.setVelocity(unit, new Vector({x: speed, y: this.getVelocity(unit).getY()}))
    }

    /**
     * @return {{unitId: number, body: *}[]}
     */
    getMapBodyUnit(){
        return this.getPhysicsEngine().getMapBodyUnit()
    }

    updateEngine(){
        this.physicsEngine.update()
    }

    /**
     * @param {Unit} unit
     */
    update(unit) {
        const body = this.physicsEngine.findBody(unit)
        if(body){
            const {x, y} = this.physicsEngine.getBodyPositionFromCollider(unit)
            const rotation = body.angle ? body.angle % (Math.PI * 2) : 0
            const transformComponent = unit.getComponent(TransformComponent)
            const meshComponent = unit.getComponent(MeshComponent)
            const actualRotation = transformComponent.getRotation()
            const newRotation = Math.round(rotation * 100) / 100
            transformComponent.setPosition(new Vector({x: parseInt(x), y: parseInt(y)}))
            transformComponent.setRotation(newRotation)
            if (actualRotation !== newRotation) {
                meshComponent.setGenerated(false)
            }
        }
    }

}