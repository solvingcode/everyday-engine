import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import Vector from '../../../../utils/Vector.js'

export default class SetWorldPositionFunction extends AFunction{

    constructor() {
        super('SetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('vector', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    execute() {
        const target = this.getInputValue('target')
        target.getComponent(TransformComponent).setPosition(this.getInputValue('vector'))
    }
}