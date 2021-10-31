import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'
import TransformHelper from '../../../../utils/TransformHelper.js'

export default class TranslateFunction extends AFunction {

    constructor() {
        super('Translate')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('moveVector', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const moveVector = this.getInputValue('moveVector')
        TransformHelper.translate(world, target, moveVector)
    }
}