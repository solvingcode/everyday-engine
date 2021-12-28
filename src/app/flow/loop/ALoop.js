import {TYPES} from '../../pobject/AttributeType.js'
import AFunction from '../function/AFunction.js'

export default class ALoop extends AFunction{

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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const index = parseInt(this.getInputValue('index') || 0)
        const array = this.getInputValue('array')
        this.setCustomOutputValue('body', '')
        this.setCustomOutputValue('index', index + 1)
        this.setCustomOutputValue('element', array[index])
        this.setCustomOutputValue('ended', index >= array.length - 1)
    }

}