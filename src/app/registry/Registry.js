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
        return this.registry.find(item => item.getName() === name)
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
     * @return {*[]}
     */
    getInstances(){
        return this.registry
    }

}