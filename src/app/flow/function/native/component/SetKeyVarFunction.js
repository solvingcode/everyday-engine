import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetKeyVarFunction extends AFunction{

    constructor() {
        super('SetKeyVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const variable = this.getInputValue('variable')
        const value = this.getInputValue('value')
        scriptComponent.setKeyValue(variable, value, world)
    }
}