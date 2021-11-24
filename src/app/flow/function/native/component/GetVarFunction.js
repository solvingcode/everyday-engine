import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetVarFunction extends AFunction{

    constructor() {
        super('GetVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const variable = this.getInputValue('variable')
        this.setOutputValue(scriptComponent.getValue(variable))
    }
}