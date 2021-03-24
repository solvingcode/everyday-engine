/**
 * @abstract
 */
export default class TypeShapeGenerator {

    /**
     * @abstract
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */
    draw(meshComponent, transformComponent, dataContext){
        throw new TypeError(`${this.constructor.name}.draw must be implemented`)
    }

}