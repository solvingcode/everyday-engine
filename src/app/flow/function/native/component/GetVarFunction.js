import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetVarFunction extends ANativeFunction{

    constructor() {
        super('GetVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}