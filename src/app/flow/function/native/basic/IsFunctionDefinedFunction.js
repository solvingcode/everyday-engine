import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsFunctionDefinedFunction extends AFunction {

    constructor() {
        super('IsFunctionDefined')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('functionName', TYPES.STRING, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const functionName = this.getInputValue('functionName')
        this.setOutputValue(!!functionRegistry.getInstance(functionName))
    }
}