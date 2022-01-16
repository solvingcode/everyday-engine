import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GetUnitNameFunction extends AFunction{

    constructor() {
        super('GetUnitName')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const target = this.getInputValue('target')
        this.setOutputValue(target.getName())
    }
}