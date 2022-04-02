import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetterFunction extends ANativeFunction{

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