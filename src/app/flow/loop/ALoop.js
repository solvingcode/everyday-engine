import {TYPES} from '../../pobject/AttributeType.js'
import AFunction from '../function/AFunction.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'

export default class ALoop extends AFunction{

    constructor(name) {
        super(name || 'Loop')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('index', TYPES.NUMBER, 0)
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, false)
        this.addOutput(TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const index = parseInt(this.getInputValue('index') || 0)
        const array = this.getInputValue('array')
        const attributes = [
            new DynamicAttribute('index', TYPES.NUMBER, index + 1),
            new DynamicAttribute('element', TYPES.ANY, array[index]),
            new DynamicAttribute('ended', TYPES.BOOLEAN, index >= array.length - 1)
        ]
        this.setOutputValue(attributes)
    }

}