import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetVarFunction extends AFunction{

    constructor() {
        super('SetVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addInput('value', TYPES.ANY)
    }
}