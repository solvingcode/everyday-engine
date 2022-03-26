import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class IsAnimationEndedFunction extends ANativeFunction {

    constructor() {
        super('IsAnimationEnded')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const targetUnit = this.getInputValue('unit')
        const animationComponent = targetUnit.getComponent(AnimationComponent)
        this.setOutputValue(
            animationComponent.getLoopTimes() > 0
        )
    }
}