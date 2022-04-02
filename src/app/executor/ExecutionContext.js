export default class ExecutionContext {
    static instance

    /**
     * @type {Camera}
     */
    camera
    /**
     * @type {number}
     */
    deltaTime
    /**
     * @type {Unit[]}
     */
    lights
    /**
     * @type {Storage}
     */
    storage

    /**
     * @param {Camera} camera
     * @param {number} deltaTime
     * @param {Unit[]} lights
     * @param {Storage} storage
     */
    setContext(camera, deltaTime, lights, storage){
        this.camera = camera
        this.deltaTime = deltaTime
        this.lights = lights
        this.storage = storage
    }

    /**
     * @return {ExecutionContext}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}