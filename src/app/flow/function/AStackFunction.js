import AFunction from './AFunction.js'
import StackProcessor from '../../operation/StackProcessor.js'
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
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext){
        const stackRegister = StackProcessor.get().run(this.getName(), this.stack, functionRegistry, unit, scriptComponent, world, executionContext)
        this.setOutputValue(stackRegister.popRet(this.getName()))
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