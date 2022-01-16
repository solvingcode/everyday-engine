import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import GUIMoveXComponent from '../../../component/internal/gui/move/GUIMoveXComponent.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import GUIMoveYComponent from '../../../component/internal/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import World from '../../../world/World.js'
import Storage from '../../../core/Storage.js'
import Window from '../../../core/Window.js'
import {KeyCode} from '../../../core/Keyboard.js'
import TransformHelper from '../../../utils/TransformHelper.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

class MoveAction extends Action {

    static STATE = 'ACTION_MOVE'

    /**
     * Move selected units
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const world = World.get()
        const {keyboard} = Window.get()
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        const isColliderMoving = selectedUnits.length === 1 && UnitHelper.isColliderEditing(selectedUnits[0])
        let direction

        if (unit.getComponent(GUIMoveFreeComponent)) {
            direction = new Vector({x: 1, y: 1})
        } else if (unit.getComponent(GUIMoveXComponent)) {
            direction = new Vector({x: 1, y: 0})
        } else if (unit.getComponent(GUIMoveYComponent)) {
            direction = new Vector({x: 0, y: 1})
        }

        let step = null
        const snapDistance = TransformHelper.getSizeFromScale(new Vector({x: 5, y: 5}))
        if (keyboard.isKeyPressed(KeyCode.ALT) && selectedUnits.length === 1) {
            const targetUnit = selectedUnits[0]
            const targetSizeVector = Vector.fromSize(targetUnit.getComponent(MeshComponent).getSize())
            const targetPosition = Vector.add(targetUnit.getComponent(TransformComponent).getPosition(), targetSizeVector)
            const nearPosition = Vector.add(targetPosition, new Vector({
                x: direction.getX() * snapDistance.getWidth(),
                y: direction.getY() * snapDistance.getHeight()
            }))
            const nearUnit = world.getUnitManager().getPhysicalUnits().filter(pUnit => {
                if (pUnit !== targetUnit) {
                    const pUnitPosition = pUnit.getComponent(TransformComponent).getPosition()
                    const pUnitSizeVector = pUnit.getComponent(MeshComponent).getSize()
                    return (direction.getY() > 0 && targetPosition.getX() >= pUnitPosition.getX() &&
                        targetPosition.getX() <= pUnitPosition.getX() + pUnitSizeVector.getWidth() &&
                        pUnitPosition.getY() <= nearPosition.getY()) ||
                        (direction.getX() > 0 && targetPosition.getY() >= pUnitPosition.getY() &&
                            targetPosition.getY() <= pUnitPosition.getY() + pUnitSizeVector.getHeight() &&
                            pUnitPosition.getX() <= nearPosition.getX())
                }
            }).sort((unitA, unitB) => {
                const positionA = unitA.getComponent(TransformComponent).getPosition()
                const positionB = unitB.getComponent(TransformComponent).getPosition()
                const distanceA = Vector.distance(targetPosition, positionA)
                const distanceB = Vector.distance(targetPosition, positionB)
                return distanceA < distanceB ? -1 : 1
            }).find(pUnit => pUnit)
            if (nearUnit) {
                step = Vector.subtract(nearUnit.getComponent(TransformComponent).getPosition(), targetPosition)
            }
        }

        if (direction) {
            if (isColliderMoving) {
                UnitHelper.moveCollider(world, mouse, selectedUnits[0], direction, step)
            } else {
                UnitHelper.moveUnits(world, Storage.get(), mouse, selectedUnits, direction, step)
            }
        }
        return false
    }

}

MoveAction.instance = null

export default MoveAction