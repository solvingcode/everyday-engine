import AFunction from './AFunction.js'
import StackProcessor from '../../operation/StackProcessor.js'
import SystemError from '../../exception/type/SystemError.js'

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
    execute(functionRegistry, unit){
        const stackRegister = StackProcessor.get().run(this.stack, functionRegistry, unit)
        this.setOutputValue(stackRegister.popRet())
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