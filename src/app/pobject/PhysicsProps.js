class PhysicsProps {

    velocity
    angularVelocity
    speed
    density
    force
    fixed
    motion
    stiffness
    angleA
    angleB
    angularStiffness

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
     * @param {number} stiffness
     */
    setStiffness(stiffness) {
        this.stiffness = stiffness
    }

    /**
     * @return {number}
     */
    getStiffness() {
        return this.stiffness
    }

    /**
     * @param {number} angleA
     */
    setAngleA(angleA) {
        this.angleA = angleA
    }

    /**
     * @return {number}
     */
    getAngleA() {
        return this.angleA
    }

    /**
     * @param {number} angleB
     */
    setAngleB(angleB) {
        this.angleB = angleB
    }

    /**
     * @return {number}
     */
    getAngleB() {
        return this.angleB
    }

    /**
     * @param {number} angularStiffness
     */
    setAngularStiffness(angularStiffness) {
        this.angularStiffness = angularStiffness
    }

    /**
     * @return {number}
     */
    getAngularStiffness() {
        return this.angularStiffness
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