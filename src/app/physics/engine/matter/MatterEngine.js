import PhysicsEngine from '../PhysicsEngine.js'

export default class MatterEngine extends PhysicsEngine {

    /**
     * @override
     * @param {Unit} unit
     * @return {Matter}
     */
    getEngine(unit) {
        return Matter
    }

    /**
     * @override
     * @param {Matter.Body} rigidBody
     */
    addToWorld(rigidBody) {
        Matter.World.add(this.getInstance().world, rigidBody)
    }

    /**
     * @override
     * @param {Matter.Body[]} colliderBodies
     * @return {Matter.Body}
     */
    newRigidBody(colliderBodies) {
        return Matter.Body.create({
            parts: colliderBodies
        })
    }

    /**
     * @override
     * @return {Matter}
     */
    createEngineInstance() {
        return Matter.Engine.create()
    }

    /**
     * @override
     */
    update(){
        Matter.Engine.update(this.getInstance())
    }
}