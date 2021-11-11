import Registry from './Registry.js'
import RigidBodyComponent from '../component/internal/RigidBodyComponent.js'
import RectColliderComponent from '../component/internal/RectColliderComponent.js'
import CircleColliderComponent from '../component/internal/CircleColliderComponent.js'
import AnimationComponent from '../component/internal/AnimationComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TileColliderComponent from '../component/internal/tile/TileColliderComponent.js'
import UIButtonComponent from '../component/internal/ui/UIButtonComponent.js'
import UIContainerComponent from '../component/internal/ui/UIContainerComponent.js'

export default class ComponentRegistry extends Registry{

    constructor() {
        super('component')
    }

    /**
     * @override
     */
    init(){
        this.concatRegistry([
            new RigidBodyComponent(),
            new RectColliderComponent(),
            new CircleColliderComponent(),
            new TileColliderComponent(),
            new AnimationComponent(),
            new TransformComponent(),
            new MeshComponent(),
            new UIButtonComponent(),
            new UIContainerComponent()
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