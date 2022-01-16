import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import RigidBodyComponent from '../../../../component/internal/RigidBodyComponent.js'
import TransformHelper from '../../../../utils/TransformHelper.js'

export default class ScaleMeshFunction extends AFunction {

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
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const scale = this.getInputValue('scale')
        const transformComponent = target.getComponent(TransformComponent)
        const actualScale = transformComponent.getScale()
        TransformHelper.scaleTo(world, unit, scale)
        if (!ObjectHelper.isEqual(actualScale, scale)) {
            target. getComponent(MeshComponent).setGenerated(false)
            const rigidBodyComponent = unit.getComponent(RigidBodyComponent)
            if(rigidBodyComponent){
                rigidBodyComponent.setCreated(false)
            }
        }
    }
}