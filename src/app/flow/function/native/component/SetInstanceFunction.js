import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetInstanceFunction extends AFunction{

    constructor() {
        super('SetInstance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT_INSTANCE, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.ANY)
    }
}