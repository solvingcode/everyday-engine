import {TYPES} from '../../pobject/AttributeType.js'
import ACondition from './ACondition.js'

export default class TrueCondition extends ACondition{

    constructor(name) {
        super(name || 'True')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.BOOLEAN, false)
        this.addOutput(TYPES.BOOLEAN)
    }

}