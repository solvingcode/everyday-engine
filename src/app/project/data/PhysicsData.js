import Data from './Data.js'

/**
 * @class {PhysicsData}
 * @extends {Data}
 */
export default class PhysicsData extends Data {

    physicsEngine

    /**
     * @param {PhysicsEngine} physicsEngine
     */
    setPhysicsEngine(physicsEngine) {
        this.physicsEngine = physicsEngine
    }

    /**
     * @return {PhysicsEngine}
     */
    getPhysicsEngine(){
        return this.physicsEngine
    }

}