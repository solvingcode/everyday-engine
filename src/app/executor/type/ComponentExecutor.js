export default class ComponentExecutor{

    static instance

    /**
     * @private
     * @param {Component[]} targetComponents
     */
    constructor(targetComponents) {
        this.targetComponents = targetComponents
    }

    /**
     * @override
     * @param {Unit} unit
     */
    execute(unit){
        throw new TypeError(`${this.constructor.name}.execute must be implemented`)
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