import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AComponentVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.COMPONENT_INSTANCE, name)
    }

}