import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import Vector from '../../../../utils/Vector.js'

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
    execute(functionRegistry, unit) {
        const target = this.getInputValue('target')
        const moveVector = this.getInputValue('moveVector')
        const transformComponent = target.getComponent(TransformComponent)
        const actualPosition = transformComponent.getPosition()
        const newPosition = Vector.add(actualPosition, moveVector)
        transformComponent.setPosition(newPosition)
    }
}