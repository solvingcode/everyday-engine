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
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animationComponent = unit.getComponent(AnimationComponent)
        this.setOutputValue(animationComponent && `${animationComponent.getAnimation()}`)
    }
}