import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArrayPushFunction extends AFunction{

    constructor() {
        super('ArrayPush')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addInput('value', TYPES.ANY)
        this.addOutput(TYPES.ARRAY | TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const array = this.getInputValue('array')
        const value = this.getInputValue('value')
        let result = array || []
        result.push(value)
        this.setOutputValue(result)
    }
}