/**
 * @abstract
 */
export default class TypeShapeGenerator {

    /**
     * @abstract
     * @param {Unit} unit
     * @param {DataContext} dataContext
     */
    draw(unit, dataContext){
        throw new TypeError(`${this.constructor.name}.draw must be implemented`)
    }

}