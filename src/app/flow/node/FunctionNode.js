import ANode from './ANode.js'
import FunctionRegistry from '../function/FunctionRegistry.js'

export default class FunctionNode extends ANode{

    /**
     * @param {string} functionName
     */
    constructor(functionName) {
        const func = FunctionRegistry.get().getInstance(functionName)
        if(!func){
            throw new TypeError(`FunctionNode Error: ${functionName} not registered`)
        }
        super(func)
    }

}