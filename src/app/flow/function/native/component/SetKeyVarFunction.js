import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SetKeyVarFunction extends AFunction{

    constructor() {
        super('SetKeyVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }
}