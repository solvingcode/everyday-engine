import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetVarValueFunction extends AFunction {

    constructor() {
        super('GetVarValue')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}