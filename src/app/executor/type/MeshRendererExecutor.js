import ComponentExecutor from './ComponentExecutor.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Window from '../../core/Window.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import World from '../../world/World.js'

export default class MeshRendererExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const {size: windowSize} = Window.get()
        const world = World.get()
        const camera = world.getCamera()
        const {width: sceneWidth, height: sceneHeight} = windowSize
        const renderer = world.getMeshRenderer()
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const size = camera.toScaleSize(meshComponent.getSize())
        const screenPosition = transformComponent.getScreenPosition()
        const meshManager = world.getMeshManager()
        if (-size.getWidth() <= screenPosition.getX() && sceneWidth >= screenPosition.getX() &&
            -size.getHeight() <= screenPosition.getY() && sceneHeight >= screenPosition.getY()) {
            const mesh = meshManager.get(unit.getId())
            mesh && renderer.draw(mesh, screenPosition)
        }
    }
}