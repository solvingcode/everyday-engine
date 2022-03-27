import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArrayIndexFunction extends AFunction{

    constructor() {
        super('ArrayIndex')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addInput('index', TYPES.NUMBER, 0)
        this.addOutput(TYPES.ANY)
    }
}