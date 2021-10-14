import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'
import ClientError from '../../exception/type/ClientError.js'

export default class AFunctionInput extends AEmptyStackFunction{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        const regex = new RegExp('([a-zA-Z0-9_]+)\\[([a-zA-Z0-9_]+)\]')
        const match = name.match(regex)
        if(!match || !Object.values(TYPES).includes(parseInt(match[2]))){
            throw new ClientError(`Input type not supported`)
        }
        this.addOutput(parseInt(match[2]))
    }

}