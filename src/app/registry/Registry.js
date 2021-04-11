/**
 * @abstract
 */
export default class Registry{

    static instance
    name

    /**
     * @private
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.registry = []
    }

    /**
     * @param {*[]} registry
     */
    init(registry){
        this.registry = registry
    }

    /**
     * @param {*} instance
     */
    register(instance){
        if(this.getInstance(instance.getName())){
            throw new TypeError(`${this.name} with name ${instance.getName()} is already registered`)
        }
        this.registry.push(instance)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    getInstance(name){
        return this.registry.find(event => event.getName() === name)
    }

    /**
     * @param {Class} className
     * @return {*[]}
     */
    getClassInstance(className){
        return this.registry.filter(event => event instanceof className)
    }

    /**
     * @return {*[]}
     */
    getInstances(){
        return this.registry
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}