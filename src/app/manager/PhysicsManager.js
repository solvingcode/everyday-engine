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
     * @param {boolean} isStatic
     */
    addBody(unit, isStatic) {
        this.physicsEngine.addBody(unit, isStatic)
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