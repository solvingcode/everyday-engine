import Vector from '../utils/Vector.js'

export default class RigidBodyOptions {

    /**
     * @type {boolean}
     */
    isStatic

    /**
     * @type {boolean}
     */
    freezeRotation

    /**
     * @type {Vector}
     */
    velocity

    constructor() {
        this.velocity = new Vector()
    }

}