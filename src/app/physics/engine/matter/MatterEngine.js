import PhysicsEngine from '../PhysicsEngine.js'
import MatterRectColliderLoader from './loader/MatterRectColliderLoader.js'
import MatterCircleColliderLoader from './loader/MatterCircleColliderLoader.js'

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
     * @param {Unit} unit
     * @param {Matter.Body[]} colliders
     * @param {{isStatic: boolean}} options
     * @return {Matter.Body}
     */
    newBody(unit, colliders, options) {
        const bodyOptions = {
            isStatic: options.isStatic,
            parts: colliders
        }
        return Matter.Body.create(bodyOptions)
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

    /**
     * @override
     */
    getRectColliderLoader(colliderComponent) {
        return MatterRectColliderLoader
    }

    /**
     * @override
     */
    getCircleColliderLoader(colliderComponent) {
        return MatterCircleColliderLoader
    }

    /**
     * @override
     */
    canCollide(unitA, unitB) {
        const bodyA = this.findBody(unitA)
        const bodyB = this.findBody(unitB)
        return Matter.Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter)
    }

    /**
     * @override
     */
    getBodyColliders(body) {
        return body.parts
    }

    /**
     * @override
     */
    getBodyPosition(body) {
        return body.position
    }
}