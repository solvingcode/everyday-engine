import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AMaskGroupVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.MASK_GROUP_INSTANCE, name)
    }

}