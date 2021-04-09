import Registry from '../../registry/Registry.js'

export default class FunctionRegistry extends Registry{

    /**
     * @param {AFunction[]} registry
     */
    init(registry){
        super.init(registry)
    }

    /**
     * @param {AFunction} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {AFunction}
     */
    getInstance(name) {
        return super.getInstance(name)
    }

    /**
     * @return {AFunction[]}
     */
    getInstances() {
        return super.getInstances()
    }

    /**
     * @return {FunctionRegistry}
     */
    static get(){
        return super.get()
    }
}