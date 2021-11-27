import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class LogFunction extends AFunction{

    constructor() {
        super('Log')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.ANY)
    }

    /**
     * @override
     */
    execute() {
        console.log(this.getInputValue('value'))
    }

}