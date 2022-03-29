import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class LogFunction extends ANativeFunction{

    constructor() {
        super('Log')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.ANY)
    }

}