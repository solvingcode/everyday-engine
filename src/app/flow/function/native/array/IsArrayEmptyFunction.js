import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class isArrayEmptyFunction extends AFunction{

    constructor() {
        super('isArrayEmpty')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY_ANY, [])
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const array = this.getInputValue('array')
        this.setOutputValue(!array || array.length)
    }
}