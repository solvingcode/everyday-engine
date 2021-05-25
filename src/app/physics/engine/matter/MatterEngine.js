import PhysicsEngine from '../PhysicsEngine.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import MatterRectColliderLoader from './loader/MatterRectColliderLoader.js'

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
     * @param {{isStatic: boolean}} options
     * @return {Matter.Body}
     */
    newBody(unit, options) {
        return Matter.Body.create({
            position: UnitHelper.toCenterPosition(unit),
            isStatic: options.isStatic
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

    /**
     * @override
     */
    getRectColliderLoader(colliderComponent) {
        return MatterRectColliderLoader
    }

    /**
     * @override
     * @param {Matter.Body} body
     * @param {Matter.Body[]} colliders
     */
    setColliders(body, colliders) {
        Matter.Body.setParts(body, colliders)
    }
}