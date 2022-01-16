import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AImageVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.IMAGE, name)
    }

}