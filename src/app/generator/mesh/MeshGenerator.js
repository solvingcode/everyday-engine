import NotImplementedError from '../../exception/type/NotImplementedError.js'
import ShapeGenerator from '../shape/ShapeGenerator.js'

/**
 * @abstract
 */
export default class MeshGenerator {
    /**
     * @abstract
     * @param {Unit} unit
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     * @param {Camera} camera
     * @return {DataContext2D | DataContextWebGL}
     */
    startContext(unit, meshComponent, transformComponent, world, camera){
        throw new NotImplementedError(this, this.startContext)
    }

    /**
     * @param {Unit} unit
     * @param {DataContext2D | DataContextWebGL} dataContext
     */
    drawContext(unit, dataContext) {
        ShapeGenerator.get().draw(unit, dataContext)
    }

    /**
     * @abstract
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext2D | DataContextWebGL} dataContext
     * @return {boolean}
     */
    closeContext(meshComponent, transformComponent, dataContext) {
        throw new NotImplementedError(this, this.closeContext)
    }
}