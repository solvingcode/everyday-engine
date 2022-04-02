import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArrayIndexFunction extends ANativeFunction{

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