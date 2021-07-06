import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'

export default class ScaleMeshFunction extends AFunction{

    constructor() {
        super('ScaleMesh')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('scale', TYPES.VECTOR, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const target = this.getInputValue('target')
        const scale = this.getInputValue('scale')
        target.getComponent(TransformComponent).setScale(scale)
    }
}