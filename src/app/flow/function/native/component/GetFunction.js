import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetFunction extends AFunction{

    constructor() {
        super('Get')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT)
        this.addInput('component', TYPES.STRING, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}