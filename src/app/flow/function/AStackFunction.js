import AFunction from './AFunction.js'
import StackProcessor from '../../operation/StackProcessor.js'

export default class AStackFunction extends AFunction{

    /**
     * @type {StackOperation[]}
     */
    stack

    constructor(name) {
        super(name)
        this.stack = []
    }

    /**
     * @override
     */
    init() {
        super.init()
        this.createStack()
    }

    /**
     * @abstract
     */
    execute(){
        const stackRegister = StackProcessor.get().run(this.stack)
        this.setOutputValue(stackRegister.popRet())
    }

    /**
     * @abstract
     */
    createStack(){
        throw new TypeError(`${this.constructor.name}.createStack must be implemented`)
    }

    /**
     * @override
     */
    initAttributes() {
        throw new TypeError(`${this.constructor.name}.initAttributes must be implemented for Native function`)
    }
}