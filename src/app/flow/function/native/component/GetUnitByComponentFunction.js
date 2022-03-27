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
}