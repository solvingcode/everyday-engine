import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class ABooleanVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.BOOLEAN, name)
    }

}