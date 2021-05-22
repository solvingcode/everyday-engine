import MatterEngine from '../physics/engine/matter/MatterEngine.js'

export default class PhysicsManager {

    /**
     * @type {PhysicsEngine}
     */
    physicsEngine

    constructor() {
        this.physicsEngine = new MatterEngine()
    }

    /**
     * @return {PhysicsEngine}
     */
    getPhysicsEngine(){
        return this.physicsEngine
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit){
        this.physicsEngine.add(unit)
    }

}