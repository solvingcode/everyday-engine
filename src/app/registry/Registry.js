import RegistryData from '../project/data/RegistryData.js'

/**
 * @abstract
 */
export default class Registry extends RegistryData{

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
        const existInstance = this.getInstance(instance.getName())
        if(existInstance){
            const indexInstance = this.findIndexInstance(existInstance)
            this.registry[indexInstance] = instance
        }else{
            this.registry.push(instance)
        }
    }

    /**
     * @param {*} instance
     */
    tryRegister(instance){
        if(this.getInstance(instance.getName())){
            throw new TypeError(`${this.name} with name ${instance.getName()} is already registered`)
        }
        this.register(instance)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    getInstance(name){
        return this.registry.find(item => item.getName() === name)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    tryGetInstance(name){
        const instance = this.getInstance(name)
        if(!instance){
            throw new TypeError(`Instance with name "${name}" not registered`)
        }
        return instance
    }

    /**
     * @param {number} id
     * @return {*}
     */
    getInstanceById(id){
        return this.registry.find(item => item.getId() === id)
    }

    /**
     * @param {Class} className
     * @return {*[]}
     */
    getClassInstance(className){
        return this.registry.filter(item => item instanceof className)
    }

    /**
     * @private
     * @param {*} instance
     */
    findIndexInstance(instance){
        return this.registry.findIndex(item => item === instance)
    }

    /**
     * @return {*[]}
     */
    getInstances(){
        return this.registry
    }

}