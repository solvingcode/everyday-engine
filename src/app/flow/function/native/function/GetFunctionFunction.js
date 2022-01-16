import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetFunctionFunction extends AFunction{

    constructor() {
        super('GetFunction')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('name', TYPES.STRING, 0)
        this.addOutput(TYPES.FUNCTION)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const name = this.getInputValue('name')
        this.setOutputValue(functionRegistry.getInstance(name))
    }
}