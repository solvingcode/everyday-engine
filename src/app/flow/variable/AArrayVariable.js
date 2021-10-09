import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'
import ClientError from '../../exception/type/ClientError.js'

export default class AArrayVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        const regex = new RegExp('([a-zA-Z0-9_]+)\\[([a-zA-Z0-9_]+)\]')
        const match = name.match(regex)
        if(!match || !Object.values(TYPES).includes(parseInt(match[2]))){
            throw new ClientError(`Variable type not supported`)
        }
        super(TYPES.ARRAY | match[2], match[1])
    }

}