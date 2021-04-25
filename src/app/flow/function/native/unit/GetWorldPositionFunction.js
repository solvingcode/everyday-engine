import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'

export default class GetWorldPositionFunction extends AFunction{

    constructor() {
        super('GetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const unit = World.get().findUnitById(parseInt(this.getInputValue('target')))
        const position = unit.getComponent(TransformComponent).getPosition()
        this.setOutputValue(position)
    }
}