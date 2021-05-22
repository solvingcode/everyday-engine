import Registry from './Registry.js'
import RigidBodyComponent from '../component/internal/RigidBodyComponent.js'

export default class ComponentRegistry extends Registry{

    constructor() {
        super('component')
    }

    /**
     * @override
     */
    init(){
        this.concatRegistry([
            new RigidBodyComponent()
        ])
    }

    /**
     * @param {Component} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {Component}
     */
    getInstance(name) {
        return super.getInstance(name)
    }

    /**
     * @param {number} id
     * @return {Component}
     */
    getInstanceById(id) {
        return super.getInstanceById(id)
    }

    /**
     * @param {string} className
     * @return {Component[]}
     */
    getInstancesByClass(className) {
        return this.getInstances().filter(instance => instance.isInstanceOfClass(className))
    }

    /**
     * @param {string} className
     */
    removeInstancesByClass(className){
        _.remove(this.getInstances(), (instance) => instance.isInstanceOfClass(className))
    }

    /**
     * @return {Component[]}
     */
    getInstances() {
        return super.getInstances()
    }

}