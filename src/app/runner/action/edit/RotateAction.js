import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import LightComponent from '../../../component/internal/LightComponent.js'

export default class RotateAction extends Action {

    static instance = null

    static STATE = 'ACTION_ROTATE'

    /**
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        this.rotateUnits(mouse, selectedUnits, unit)
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     * @param {Unit} rotateUnit
     */
    static rotateUnits(mouse, selectedUnits, rotateUnit){
        const world = World.get()
        const scenePosition = world.getWorldScalePosition(mouse.scenePosition)
        const currentScenePosition = world.getWorldScalePosition(mouse.currentScenePosition)
        mouse.dragAndDrop(world.getCamera())
        const vectorStart = UnitHelper.fromAbsolutePosition(rotateUnit, scenePosition)
        const vectorEnd = UnitHelper.fromAbsolutePosition(rotateUnit, currentScenePosition)
        const angleRadian = Vector.angle(vectorStart, vectorEnd)
        selectedUnits.map((unit) => {
            if(unit.hasComponentsByClasses([LightComponent])){
                unit.findComponentByClass(LightComponent).setGenerated(false)
            }
            const transformComponent = unit.getComponent(TransformComponent)
            const rotation = transformComponent.getRotation() + angleRadian
            transformComponent.setRotation(rotation)
            unit.getComponent(MeshComponent).setGenerated(false)
        })
    }

    /**
     * @override
     */
    static stop(mouse, selectedUnits) {
        selectedUnits.map(unit =>
            unit.getComponent(MeshComponent).setGenerated(false))
        return true
    }

}