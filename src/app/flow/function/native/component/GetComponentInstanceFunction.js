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
        this.addInput('unit', TYPES.UNIT)
        this.addInput('component', TYPES.STRING, 0)
        this.addOutput(TYPES.COMPONENT_INSTANCE)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const classComponentName = this.getInputValue('component')
        const classComponent = world.getComponentRegistry().getInstance(classComponentName)
        if (!classComponent) {
            throw new ClientError(`${this.getName()}: ${classComponentName} not found`)
        }
        const component = unit.findComponentByClass(classComponent.constructor)
        if (!component) {
            throw new ClientError(`${this.getName()}: ${classComponent.constructor.name} not found`)
        }
        this.setOutputValue(component)
    }
}