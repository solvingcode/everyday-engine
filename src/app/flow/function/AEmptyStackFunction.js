import AStackFunction from './AStackFunction.js'

export default class AEmptyStackFunction extends AStackFunction{

    constructor(name) {
        super(name)
        this.inputs = []
        this.stack = []
    }

    initAttributes(){
    }

    createStack() {
    }

    /**
     * @param {DynamicAttribute[]} inputs
     */
    setInputs(inputs){
        this.inputs = inputs
    }

    /**
     * @param {StackOperation[]} stack
     */
    setStack(stack){
        this.stack = stack
    }

}