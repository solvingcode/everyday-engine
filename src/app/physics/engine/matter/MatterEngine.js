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
    newBody(unit, position, colliders, options) {
        const bodyOptions = {
            label: unit.getId(),
            isStatic: options.isStatic,
            isSensor: !colliders.length,
            parts: colliders
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
     */
    clearEngine() {
        Matter.Engine.clear(this.getInstance())
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
    translate(body, moveVector) {
        Matter.Body.translate(body, moveVector)
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
    detectCollisions(sourceBodyCollider, targetBodyColliders) {
        return Matter.Query.collides(sourceBodyCollider, targetBodyColliders)
    }

    /**
     * @override
     */
    getBodyColliders(body) {
        return body ? body.parts.filter((_, index) => index !== 0) : []
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
     * @param {Matter.Body} body
     * @param {Vector} position
     */
    setPositionToBody(body, position) {
        Matter.Body.setPosition(body, position)
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
        return Matter.Query.ray(this.getBodies(), start, end).filter(collision => collision.parentA !== body)
    }

    /**
     * @return {*[]}
     */
    getBodies(){
        return Matter.Composite.allBodies(this.getInstance().world)
    }

    /**
     * @override
     */
    findBody(unit) {
        return this.getBodies().find(body => body.label === unit.getId())
    }

    /**
     * @override
     */
    findBodyCollider(unit, colliderComponent) {
        const body = this.findBody(unit)
        return this.getBodyColliders(body).find(pBody => pBody.label === colliderComponent.getId())
    }

    /**
     * @override
     */
    findColliders(unit) {
        const body = this.findBody(unit)
        return this.getBodyColliders(body)
    }

    /**
     * @override
     */
    hasAllColliders(unit, colliderComponents) {
        const colliderComponentIds = colliderComponents.map(colliderComponent => colliderComponent.getId())
        const actualColliders = this.findColliders(unit)
        return actualColliders.every(collider => colliderComponentIds.includes(collider.label))
    }

    /**
     * @override
     */
    hasDeprecatedColliders(unit, colliderComponents) {
        const actualColliders = this.findColliders(unit)
        return colliderComponents.some(colliderComponent => !actualColliders
            .find(collider => collider.label === colliderComponent.getId()))
    }

    /**
     * @override
     */
    isCollisionHasCollider(collision, colliderComponent) {
        const colliderComponentId = colliderComponent.getId()
        return colliderComponentId === collision.bodyA.label || colliderComponentId === collision.bodyB.label
    }

    /**
     * @override
     */
    getColliderIdsFromCollision(collision){
        return [collision.bodyA.label, collision.bodyB.label]
    }
}