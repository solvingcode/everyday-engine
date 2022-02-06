import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import World from '../../world/World.js'
import {CANVAS_CONTEXT_TYPE} from '../../core/Constant.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'
import Maths from '../../utils/Maths.js'
import WebGLMeshGenerator from '../../generator/mesh/WebGLMeshGenerator.js'
import TwoDMeshGenerator from '../../generator/mesh/TwoDMeshGenerator.js'

export default class MeshGenerationExecutor extends ComponentExecutor {

    constructor() {
        super([MeshComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const meshComponent = unit.getComponent(MeshComponent)
        const world = World.get()
        const {camera} = executionContext
        if (!meshComponent.isGenerated()) {
            meshComponent.setVertices(UnitHelper.generateVertices(unit))
            if (!meshComponent.isEnabled() ||
                !unit.isVisible() ||
                !this.generate(unit, world, camera)) {
                world.getMeshManager().clear(unit.getId())
            }
            meshComponent.setGenerated(true)
            meshComponent.setVersion(Maths.generateId())
        }
    }

    /**
     * @return {MeshGenerator}
     */
    getGenerator(){
        if (CANVAS_CONTEXT_TYPE === 'webgl') {
            return new WebGLMeshGenerator()
        } else {
            return new TwoDMeshGenerator()
        }
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @param {Camera} camera
     */
    generate(unit, world, camera) {
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const meshGenerator = this.getGenerator()
        const dataContext = meshGenerator.startContext(unit.getId(), meshComponent, transformComponent, world, camera)
        if (dataContext) {
            meshGenerator.drawContext(unit, dataContext)
            return meshGenerator.closeContext(meshComponent, transformComponent, dataContext)
        }
    }
}