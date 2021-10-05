import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class GetComponentInstanceFunction extends AFunction {

    constructor() {
        super('GetComponentInstance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addOutput(TYPES.COMPONENT_INSTANCE)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('component')
        const component = unit.findComponentByClass(classComponent)
        if (!component) {
            throw new ClientError(`${this.getName()}: ${classComponent.constructor.name} not found`)
        }
        this.setOutputValue(component.getId())
    }
}