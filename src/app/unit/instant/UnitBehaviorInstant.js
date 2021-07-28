import BehaviorUnit from '../type/BehaviorUnit.js'

export default class UnitBehaviorInstant extends BehaviorUnit{

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