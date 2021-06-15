import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetFunction extends AFunction{

    constructor() {
        super('Get')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        this.setOutputValue(unit.getComponent(classComponent).getValue(attribute))
    }
}