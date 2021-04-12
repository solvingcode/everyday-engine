import AFunction from './AFunction.js'
import StackProcessor from '../../operation/StackProcessor.js'

export default class AStackFunction extends AFunction{

    /**
     * @override
     */
    init() {
        super.init()
        this.createStack()
    }

    /**
     * @override
     */
    execute(functionRegistry){
        const stackRegister = StackProcessor.get().run(this.stack, functionRegistry)
        this.setOutputValue(stackRegister.popRet())
    }

    /**
     * @abstract
     */
    createStack(){
        throw new TypeError(`${this.constructor.name}.createStack must be implemented`)
    }

    /**
     * @abstract
     */
    initAttributes() {
        throw new TypeError(`${this.constructor.name}.initAttributes must be implemented for Native function`)
    }
}