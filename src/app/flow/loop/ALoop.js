import {TYPES} from '../../pobject/AttributeType.js'
import ANativeFunction from '../function/native/ANativeFunction.js'

export default class ALoop extends ANativeFunction{

    constructor(name) {
        super(name || 'Loop')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('index', TYPES.NUMBER, 0)
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, false)
        this.addCustomOutput('body', TYPES.ANY)
        this.addCustomOutput('index', TYPES.NUMBER)
        this.addCustomOutput('element', TYPES.ANY)
        this.addCustomOutput('ended', TYPES.BOOLEAN)
    }
}