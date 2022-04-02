import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetInstanceFunction extends ANativeFunction{

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