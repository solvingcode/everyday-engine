import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetFunction extends AFunction{

    constructor() {
        super('Set')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.COMPONENT, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('target')
        const attribute = this.getInputValue('attribute')
        const value = this.getInputValue('value')
        unit.getComponent(classComponent).setValue(attribute, value)
    }
}