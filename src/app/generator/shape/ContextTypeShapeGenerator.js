import NotImplementedError from '../../exception/type/NotImplementedError.js'

/**
 * @abstract
 */
export default class ContextTypeShapeGenerator {

    /**
     * @abstract
     * @param {Unit} unit
     * @param {DataContext2D} dataContext
     * @return {void}
     */
    draw(unit, dataContext){
        throw new NotImplementedError(this, this.draw)
    }

}