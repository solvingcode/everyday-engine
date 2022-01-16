import AFunction from '../function/AFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class APromise extends AFunction{

    constructor() {
        super('APromise')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANY, [])
        this.addOutput(TYPES.PROMISE)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        this.setOutputValue(new Promise(resolve => resolve(target)))
    }
}