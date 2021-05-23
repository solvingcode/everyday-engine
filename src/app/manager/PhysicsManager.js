import MatterEngine from '../physics/engine/matter/MatterEngine.js'
import Vector from '../utils/Vector.js'
import UnitHelper from '../utils/UnitHelper.js'
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
     */
    addUnit(unit) {
        this.physicsEngine.addUnit(unit)
    }

    updateEngine(){
        this.physicsEngine.update()
    }

    /**
     * @param {Unit} unit
     */
    update(unit) {
        const rigidBody = this.physicsEngine.findRigidBody(unit)
        if(rigidBody){
            const {x, y} = UnitHelper.fromCenterPosition(unit, new Vector(rigidBody.position))
            const rotation = rigidBody.angle ? rigidBody.angle % (Math.PI * 2) : 0
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