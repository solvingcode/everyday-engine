import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class TranslateFunction extends AFunction {

    constructor() {
        super('Translate')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('moveVector', TYPES.VECTOR, new Vector())
    }
}