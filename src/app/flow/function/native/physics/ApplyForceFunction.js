import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class ApplyForceFunction extends AFunction{

    constructor() {
        super('ApplyForce')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('position', TYPES.VECTOR, new Vector())
        this.addInput('force', TYPES.VECTOR, new Vector())
    }
}