import EmptyUnit from '../type/EmptyUnit.js'

export default class UnitInstant extends EmptyUnit{

    constructor() {
        super()
        this.setup()
    }

    /**
     * @abstract
     */
    setup(){
        throw new TypeError(`${this.constructor.name}.setup must be implemented`)
    }

    /**
     * @abstract
     */
    instantiate(){
        throw new TypeError(`${this.constructor.name}.instantiate must be implemented`)
    }

}