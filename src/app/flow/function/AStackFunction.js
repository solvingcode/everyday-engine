import AFunction from './AFunction.js'
import StackProcessor from '../../operation/StackProcessor.js'

export default class AStackFunction extends AFunction{

    /**
     * @type {StackOperation[]}
     */
    stack

    /**
     * @param {string} name
     */
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
     * @abstract
     */
    initAttributes() {
        throw new TypeError(`${this.constructor.name}.initAttributes must be implemented for Native function`)
    }
}