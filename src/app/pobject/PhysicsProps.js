class PhysicsProps {

    velocity
    angularVelocity
    speed
    density
    force
    fixed
    motion

    /**
     * @param {Vector} velocity
     */
    setVelocity(velocity) {
        this.velocity = velocity
    }

    /**
     * @return {Vector}
     */
    getVelocity() {
        return this.velocity
    }

    /**
     * @param {number} angularVelocity
     */
    setAngularVelocity(angularVelocity) {
        this.angularVelocity = angularVelocity
    }

    /**
     * @return {number}
     */
    getAngularVelocity() {
        return this.angularVelocity
    }

    /**
     * @param {number} speed
     */
    setSpeed(speed) {
        this.speed = speed
    }

    /**
     * @return {number}
     */
    getSpeed() {
        return this.speed
    }

    /**
     * @param {number} density
     */
    setDensity(density) {
        this.density = density
    }

    /**
     * @return {number}
     */
    getDensity() {
        return this.density
    }

    /**
     * @param {Vector} force
     */
    setForce(force) {
        this.force = force
    }

    /**
     * @return {Vector}
     */
    getForce() {
        return this.force
    }

    /**
     * @param {boolean} fixed
     */
    setFixed(fixed) {
        this.fixed = fixed
    }

    /**
     * @return {boolean}
     */
    getFixed() {
        return this.fixed
    }

    /**
     * @param {boolean} motion
     */
    setMotion(motion) {
        this.motion = motion
    }

    /**
     * @return {boolean}
     */
    getMotion() {
        return this.motion
    }

}

export default PhysicsProps