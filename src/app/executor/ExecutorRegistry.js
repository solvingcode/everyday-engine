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
     */
    execute(unit){
        this.registry.forEach(executor => {
            if(unit.hasComponents(executor.getTargetComponents())){
                executor.execute(unit)
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