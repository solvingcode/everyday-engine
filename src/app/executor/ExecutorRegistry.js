export default class ExecutorRegistry {

    static instance

    /**
     * @private
     */
    constructor() {
        /**
         * @private
         * @type {ComponentExecutor[]}
         */
        this.registry = []
    }

    /**
     * @param {ComponentExecutor[]} registry
     */
    register(registry){
        this.registry = registry
    }

    /**
     * @param {Unit} unit
     * @param {{camera: Camera}} executionContext
     */
    execute(unit, executionContext){
        this.registry.forEach(executor => {
            if(unit.hasComponents(executor.getTargetComponents())){
                executor.execute(unit, executionContext)
            }
        })
    }

    /**
     * @return {ExecutorRegistry}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}