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
     */
    deleteBody(body) {
        Matter.World.remove(this.getInstance().world, body)
    }

    /**
     * @override
     */
    addColliderBody(body, collider) {
        Matter.Body.setParts(body, [...body.parts, collider])
    }

    /**
     * @override
     */
    newBody(position, colliders, options) {
        const bodyOptions = {
            isStatic: options.isStatic,
            isSensor: !colliders.length,
            parts: colliders,
            //friction: 0
        }
        if (!colliders.length) {
            bodyOptions.position = position
        }
        if (options.freezeRotation) {
            bodyOptions.inertia = Infinity
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
    update() {
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
        return body.parts.filter((_, index) => index !== 0)
    }

    /**
     * @override
     */
    getBodyPosition(body) {
        return body.position
    }

    /**
     * @override
     */
    getBodyRotation(body) {
        return body.angle ? body.angle % (Math.PI * 2) : 0
    }

    /**
     * @override
     * @param {Matter.Body} body
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForceToBody(body, position, force) {
        Matter.Body.applyForce(body, position, force)
    }

    /**
     * @override
     * @param {Matter.Body} body
     * @param {Vector} velocity
     */
    setVelocityToBody(body, velocity) {
        Matter.Body.setVelocity(body, velocity)
    }

    /**
     * @override
     */
    setFrictionToBody(body, friction) {
        body.friction = friction
    }

    /**
     * @override
     */
    getVelocityByBody(body) {
        return body.velocity
    }

    /**
     * @override
     * @param {Matter.Body} body
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: Matter.Body, bodyA: Matter.Body, bodyB: Matter.Body, collided: boolean}[]}
     */
    rayCastForBody(body, start, end) {
        const bodies = Matter.Composite.allBodies(this.getInstance().world)
        return Matter.Query.ray(bodies, start, end).filter(collision => collision.parentA !== body)
    }
}