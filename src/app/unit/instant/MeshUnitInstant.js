import MeshUnit from '../type/MeshUnit.js'

export default class MeshUnitInstant extends MeshUnit{

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