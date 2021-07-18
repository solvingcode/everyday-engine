import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import ClientError from '../../../../exception/type/ClientError.js'

export default class GetComponentFunction extends AFunction {

    constructor() {
        super('GetComponent')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT)
        this.addInput('name', TYPES.STRING)
        this.addOutput(TYPES.COMPONENT_INSTANCE)
    }

    /**
     * @override
     */
    execute() {
        const unit = this.getInputValue('target')
        const componentName = this.getInputValue('name')
        const component = unit.findComponentByName(componentName)
        if (!component) {
            throw new ClientError(`${this.getName()}: ${componentName} not found`)
        }
        this.setOutputValue(component.getId())
    }
}