import RegistryData from '../project/data/RegistryData.js'
import ClientError from '../exception/type/ClientError.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Registry extends RegistryData {

    /**
     * @abstract
     */
    init() {
        throw new SystemError(`${this.constructor.name}.init must be implemented`)
    }

    /**
     * @param {*} instance
     */
    register(instance) {
        const existInstance = this.getInstance(instance.getName())
        if (existInstance) {
            const indexInstance = this.findIndexInstance(existInstance)
            this.registry[indexInstance] = instance
        } else {
            this.registry.push(instance)
        }
    }

    /**
     * @param {*} instance
     */
    tryRegister(instance) {
        if (this.getInstance(instance.getName())) {
            throw new ClientError(`${this.name} with name ${instance.getName()} is already registered`)
        }
        this.register(instance)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    getInstance(name) {
        return this.registry.find(item => item.getName() === name)
    }

    /**
     * @param {*} instance
     * @return {boolean}
     */
    hasInstance(instance){
        return this.registry.find(item => item === instance)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    tryGetInstance(name) {
        const instance = this.getInstance(name)
        if (!instance) {
            throw new ClientError(`Instance with name "${name}" not registered`)
        }
        return instance
    }

    /**
     * @param {number} id
     * @return {*}
     */
    getInstanceById(id) {
        return this.registry.find(item => item.getId() === id)
    }

    /**
     * @param {Class} className
     * @return {*[]}
     */
    getClassInstance(className) {
        return this.registry.filter(item => item instanceof className)
    }

    /**
     * @private
     * @param {*} instance
     */
    findIndexInstance(instance) {
        return this.registry.findIndex(item => item === instance)
    }

    /**
     * @param {*} instance
     */
    removeInstance(instance){
        const index = this.findIndexInstance(instance)
        this.registry.splice(index, 1)
    }

    /**
     * @return {*[]}
     */
    getInstances() {
        return this.registry
    }

}