import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import TransformHelper from '../../../utils/TransformHelper.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'

export default class AlignViewAction extends Action {

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedUnit = world.getUnitManager().getSelected()
        const transformComponent = selectedUnit.getComponent(TransformComponent)
        const camera = world.getCamera()
        if (transformComponent) {
            const transformScale = transformComponent.getScale()
            const scaleX = world.getResolution().getWidth() / TransformHelper.getSizeFromScale(transformScale).getWidth()
            const scaleY = world.getResolution().getHeight() / TransformHelper.getSizeFromScale(transformScale).getHeight()
            const scale = Math.min(scaleX, scaleY)
            if (camera.getScale() !== scale) {
                camera.setScale(scale)
            }
            const position = transformComponent.getPosition()
            if (!ObjectHelper.isEqual(camera.getPosition(), position)) {
                camera.setPosition(position)
            }
            world.regenerateAll()
        }
        return true
    }

}