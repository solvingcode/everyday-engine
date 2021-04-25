import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import GUIMoveXComponent from '../../../component/internal/gui/move/GUIMoveXComponent.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import GUIMoveYComponent from '../../../component/internal/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../../component/internal/gui/move/GUIMoveFreeComponent.js'

class MoveAction extends Action {

    static STATE = 'ACTION_MOVE'

    /**
     * Move selected units
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        let direction

        if(unit.getComponent(GUIMoveFreeComponent)){
            direction = new Vector({x: 1, y: 1})
        }else if(unit.getComponent(GUIMoveXComponent)){
            direction = new Vector({x: 1, y: 0})
        }else if(unit.getComponent(GUIMoveYComponent)){
            direction = new Vector({x: 0, y: 1})
        }

        if(direction){
            this.moveUnits(mouse, selectedUnits, direction)
        }
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     * @param {Vector} direction
     */
    static moveUnits(mouse, selectedUnits, direction){
        const world = World.get()
        const camera = world.getCamera()
        const instance = MoveAction.get()
        const dragDistance = mouse.getDragDistanceCamera(camera)
        const scenePosition = camera.fromCameraScale(mouse.scenePosition)
        instance.position = World.get().getWorldPosition(scenePosition)
        instance.relativeEntityPositions = instance.relativeEntityPositions ||
            selectedUnits.map(unit => UnitHelper.fromAbsolutePosition(unit, instance.position))
        const targetPoint = new Vector({
            x: instance.position.x + dragDistance.x * direction.x,
            y: instance.position.y + dragDistance.y * direction.y
        })
        selectedUnits.map((unit, index) => {
            UnitHelper.moveRelativePointTo(unit, instance.relativeEntityPositions[index], targetPoint)
        })
    }

    /**
     * Stop the move action
     */
    static stop(mouse, selectedUnits) {
        const instance = MoveAction.get()
        instance.relativeEntityPositions = null
        instance.position = null
        selectedUnits.map(unit => unit.getComponent(MeshComponent).setGenerated(false))
        return true
    }

    static get() {
        if (!MoveAction.instance) {
            MoveAction.instance = new MoveAction()
        }
        return MoveAction.instance
    }

}

MoveAction.instance = null

export default MoveAction