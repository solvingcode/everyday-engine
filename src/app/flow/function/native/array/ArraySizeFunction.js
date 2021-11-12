import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArraySizeFunction extends AFunction{

    constructor() {
        super('ArraySize')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const array = this.getInputValue('array')
        this.setOutputValue(array.length)
    }
}