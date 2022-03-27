import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class HasCurrentAnimationFunction extends AFunction {

    constructor() {
        super('HasCurrentAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animationComponent = unit.getComponent(AnimationComponent)
        this.setOutputValue(!!animationComponent && !!animationComponent.getAnimation())
    }
}