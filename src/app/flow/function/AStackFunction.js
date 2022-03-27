import AFunction from './AFunction.js'
import SystemError from '../../exception/type/SystemError.js'

export default class AStackFunction extends AFunction{

    /**
     * @override
     */
    init(params) {
        super.init(params)
        this.createStack()
    }

    /**
     * @abstract
     */
    createStack(){
        throw new SystemError(`${this.constructor.name}.createStack must be implemented`)
    }

    /**
     * @abstract
     */
    initAttributes() {
        throw new SystemError(`${this.constructor.name}.initAttributes must be implemented for Native function`)
    }
}