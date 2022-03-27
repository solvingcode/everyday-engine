import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetInstanceFunction extends AFunction{

    constructor() {
        super('GetInstance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT_INSTANCE, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}