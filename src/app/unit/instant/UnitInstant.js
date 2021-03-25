import EmptyUnit from '../type/EmptyUnit.js'

export default class UnitInstant extends EmptyUnit{

    /**
     * @abstract
     */
    instantiate(){
        throw new TypeError(`${this.constructor.name}.instantiate must be implemented`)
    }

}