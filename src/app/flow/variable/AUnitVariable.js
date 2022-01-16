import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AUnitVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.UNIT, name)
    }

}