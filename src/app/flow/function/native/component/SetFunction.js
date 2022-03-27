import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetFunction extends AFunction{

    constructor() {
        super('Set')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT)
        this.addInput('component', TYPES.STRING, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }
}