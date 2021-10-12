import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import ClassHelper from '../../../../utils/ClassHelper.js'

export default class GetterFunction extends AFunction{

    constructor() {
        super('Getter')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANY, 0)
        this.addInput('property', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const property = this.getInputValue('property')
        const getterString = ClassHelper.getGetter(target, property)
        this.setOutputValue(target[getterString]())
    }
}