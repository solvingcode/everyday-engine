import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class StopAnimationFunction extends AFunction{

    constructor() {
        super('EndAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const targetUnit = this.getInputValue('unit')
        const animationComponent = targetUnit.getComponent(AnimationComponent)
        animationComponent.setTime(0)
        animationComponent.setLoopTimes(0)
        animationComponent.setAnimation(null)
    }
}