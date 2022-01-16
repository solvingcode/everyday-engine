import Data from './Data.js'

/**
 * @class {PhysicsEngineData}
 * @extends {Data}
 */
export default class PhysicsEngineData extends Data {

    /**
     * Set the physics manager that loaded the phyiscs engine
     * @param {PhysicsData} physicsManager
     */
    setPhysicsManager(physicsManager) {
        this.physicsManager = physicsManager
    }

    /**
     * Get the physics manager that loaded the phyiscs engine
     */
    getPhysicsManager() {
        return this.physicsManager
    }

}