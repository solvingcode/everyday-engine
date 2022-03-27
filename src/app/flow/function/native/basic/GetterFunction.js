import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetterFunction extends AFunction{

    constructor() {
        super('Getter')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANY, 0)
        this.addInput('property', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}