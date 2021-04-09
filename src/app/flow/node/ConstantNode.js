import ANode from './ANode.js'
import AConstant from '../constant/AConstant.js'
import FunctionRegistry from '../function/FunctionRegistry.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'

export default class ConstantNode extends ANode{

    /**
     * @param {string|number|boolean} value
     */
    constructor(value) {
        const constant = new AConstant(DynamicAttributeHelper.findTypeOfValue(value), value)
        FunctionRegistry.get().register(constant)
        super(constant)
    }

}