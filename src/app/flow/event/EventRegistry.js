import Registry from '../../registry/Registry.js'

export default class EventRegistry extends Registry{

    /**
     * @param {AEvent[]} registry
     */
    init(registry){
        super.init(registry)
    }

    /**
     * @param {AEvent} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {AEvent}
     */
    getInstance(name) {
        return super.getInstance(name)
    }

    /**
     * @override
     * @return {AEvent[]}
     */
    getClassInstance(className){
        return super.getClassInstance(className)
    }

    /**
     * @return {AEvent[]}
     */
    getInstances() {
        return super.getInstances()
    }

    /**
     * @return {EventRegistry}
     */
    static get(){
        return super.get()
    }
}