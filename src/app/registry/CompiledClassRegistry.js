import Registry from './Registry.js'

export default class CompiledClassRegistry extends Registry{

    constructor() {
        super('compiled_class')
    }

    /**
     * @override
     */
    init(){
    }

    /**
     * @param {CompiledClass} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {CompiledClass}
     */
    getInstance(name) {
        if(!name){
            return this.getDefault()
        }
        return super.getInstance(name)
    }

    /**
     * @param {number} id
     * @return {CompiledClass}
     */
    getInstanceById(id) {
        return super.getInstanceById(id)
    }

    /**
     * @return {CompiledClass[]}
     */
    getInstances() {
        return super.getInstances()
    }

}