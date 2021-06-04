import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'

export default class GetWorldPositionFunction extends AFunction{

    constructor() {
        super('GetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const target = this.getInputValue('target')
        const position = target.getComponent(TransformComponent).getPosition()
        this.setOutputValue(position)
    }
}