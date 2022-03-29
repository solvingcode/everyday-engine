import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetComponentInstanceFunction extends ANativeFunction {

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
}