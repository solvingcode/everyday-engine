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
        this.addInput('component', TYPES.STRING, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponentName = this.getInputValue('component')
        const classComponent = world.getComponentRegistry().getInstance(classComponentName)
        const attribute = this.getInputValue('attribute')
        const component = unit.getComponent(classComponent.constructor)
        this.setOutputValue(component.getValue(attribute))
    }
}