import ComponentExecutor from './ComponentExecutor.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import ObjectHelper from '../../utils/ObjectHelper.js'
import Size from '../../pobject/Size.js'

export default class GUIColliderExecutor extends ComponentExecutor {

    constructor() {
        super([ColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const colliderComponent = unit.getComponent(ColliderComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if(ObjectHelper.isEqual(colliderComponent.getSize(), new Size(0))){
            colliderComponent.setSize(_.cloneDeep(meshComponent.getSize()))
        }
    }

}