import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class VectorRoundFunction extends AFunction{

    constructor() {
        super('VectorRound')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vector', TYPES.VECTOR, 0)
        this.addInput('digits', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const vector = this.getInputValue('vector')
        const numberDigits = parseInt(this.getInputValue('digits'))
        this.setOutputValue(new Vector({
            x: Math.round(vector.getX() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits),
            y: Math.round(vector.getY() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits),
            z: Math.round(vector.getZ() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits)
        }))
    }
}