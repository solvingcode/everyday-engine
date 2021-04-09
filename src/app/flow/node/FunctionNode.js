import ANode from './ANode.js'
import FunctionRegistry from '../function/FunctionRegistry.js'

export default class FunctionNode extends ANode{

    /**
     * @param {string} functionName
     */
    constructor(functionName) {
        super(FunctionRegistry.get().getInstance(functionName))
    }

}