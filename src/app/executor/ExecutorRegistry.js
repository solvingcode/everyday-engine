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
     * @param {World} world
     */
    execute(world){
        const unitManager = world.getUnitManager()
        this.registry.forEach(executor => {
            unitManager.getUnitsHasComponents(executor.getTargetComponents()).forEach(unit =>
                executor.execute(unit)
            )
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