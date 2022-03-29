import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetUnitByComponentFunction extends ANativeFunction{

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