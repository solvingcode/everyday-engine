import SystemError from '../../exception/type/SystemError.js'

export default class ComponentExecutor{

    static instance

    /**
     * @protected
     * @param {Component[]} targetComponents
     */
    constructor(targetComponents) {
        this.targetComponents = targetComponents
    }

    /**
     * @override
     * @param {Unit} unit
     * @param {{camera: Camera, lights: Unit[], deltaTime: number}} executionContext
     * @return {void}
     */
    execute(unit, executionContext){
        throw new SystemError(`${this.constructor.name}.execute must be implemented`)
    }

    /**
     * @return {Component[]}
     */
    getTargetComponents(){
        return this.targetComponents
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}