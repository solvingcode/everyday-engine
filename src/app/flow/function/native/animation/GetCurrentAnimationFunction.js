import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class GetCurrentAnimationFunction extends AFunction {

    constructor() {
        super('GetCurrentAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const targetUnit = this.getInputValue('unit')
        const animationComponent = targetUnit.getComponent(AnimationComponent)
        this.setOutputValue(animationComponent && `${animationComponent.getAnimation()}`)
    }
}