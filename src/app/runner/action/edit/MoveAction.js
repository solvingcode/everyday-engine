import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import GUIMoveXComponent from '../../../component/internal/gui/move/GUIMoveXComponent.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import GUIMoveYComponent from '../../../component/internal/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import LightComponent from '../../../component/internal/LightComponent.js'
import UITransformComponent from '../../../component/internal/ui/UITransformComponent.js'

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
            if(selectedUnits.length === 1 && UnitHelper.isColliderEditing(selectedUnits[0])){
                this.moveCollider(mouse, selectedUnits[0], direction)
            }else{
                this.moveUnits(mouse, selectedUnits, direction)
            }
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
        const dragArea = mouse.dragAndDrop(camera)
        const dragAreaDirection = new Vector({
            x: dragArea.x * direction.x,
            y: dragArea.y * direction.y
        })
        selectedUnits.map(unit => {
            if(unit.hasComponentsByClasses([LightComponent])){
                unit.findComponentByClass(LightComponent).setGenerated(false)
            }
            const transformComponent = unit.getComponent(TransformComponent)
            const uiTransformComponent = unit.getComponent(UITransformComponent)
            const position = transformComponent.getPosition()
            transformComponent.setPosition(Vector.add(position, dragAreaDirection))
            if(uiTransformComponent){
                uiTransformComponent.setLastAnchorMin(null)
                uiTransformComponent.setLastAnchorMax(null)
            }
        })
    }

    /**
     * @param {Mouse} mouse
     * @param {Unit} unit
     * @param {Vector} direction
     */
    static moveCollider(mouse, unit, direction){
        const world = World.get()
        const camera = world.getCamera()
        const dragArea = mouse.dragAndDrop(camera)
        const dragAreaDirection = new Vector({
            x: dragArea.x * direction.x,
            y: dragArea.y * direction.y
        })
        const colliderComponent = UnitHelper.getColliderEditing(unit)
        const position = colliderComponent.getPosition()
        colliderComponent.setPosition(Vector.add(position, dragAreaDirection))
    }

}

MoveAction.instance = null

export default MoveAction