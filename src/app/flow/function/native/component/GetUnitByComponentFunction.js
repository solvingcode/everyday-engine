import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetUnitByComponentFunction extends AFunction{

    constructor() {
        super('GetUnitByComponent')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT_INSTANCE)
        this.addOutput(TYPES.UNIT)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const component = this.getInputValue('component')
        const unitFound = world.getUnitManager().findUnitByComponent(component)
        this.setOutputValue(unitFound && unitFound.getId())
    }
}