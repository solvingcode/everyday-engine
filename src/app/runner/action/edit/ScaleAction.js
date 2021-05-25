import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import Size from '../../../pobject/Size.js'
import GUIScaleFreeComponent from '../../../component/internal/gui/scale/GUIScaleFreeComponent.js'
import GUIScaleXComponent from '../../../component/internal/gui/scale/GUIScaleXComponent.js'
import GUIScaleYComponent from '../../../component/internal/gui/scale/GUIScaleYComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class ScaleAction extends Action {

    static instance = null

    static STATE = 'ACTION_SCALE'

    /**
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        let direction

        if(unit.getComponent(GUIScaleFreeComponent)){
            direction = new Vector({x: 1, y: 1})
        }else if(unit.getComponent(GUIScaleXComponent)){
            direction = new Vector({x: 1, y: 0})
        }else if(unit.getComponent(GUIScaleYComponent)){
            direction = new Vector({x: 0, y: 1})
        }

        if(direction){
            if(selectedUnits.length === 1 && UnitHelper.isColliderEditing(selectedUnits[0])){
                this.scaleCollider(mouse, selectedUnits[0], direction)
            }else {
                this.scaleUnits(mouse, selectedUnits, direction)
            }
        }
        return false
    }

    /**
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     * @param {Vector} direction
     */
    static scaleUnits(mouse, selectedUnits, direction){
        const world = World.get()
        const camera = world.getCamera()
        const dragDistance = mouse.dragAndDrop(camera)
        selectedUnits.map((unit) => {
            const meshComponent = unit.getComponent(MeshComponent)
            const {width: meshWidth, height: meshHeight} = meshComponent.getSize()
            const ratio = meshHeight / meshWidth
            const width = meshComponent.getSize().getWidth() + dragDistance.x * direction.x
            const height = meshComponent.getSize().getHeight() + (direction.x ? dragDistance.x * ratio : dragDistance.y) * direction.y
            meshComponent.setSize(new Size({width, height}))
            meshComponent.setGenerated(false)
        })
    }

    /**
     * @param {Mouse} mouse
     * @param {Unit} unit
     * @param {Vector} direction
     */
    static scaleCollider(mouse, unit, direction){
        const world = World.get()
        const camera = world.getCamera()
        const dragDistance = mouse.dragAndDrop(camera)
        const colliderComponent = UnitHelper.getColliderEditing(unit)
        const {width: colliderWidth, height: colliderHeight} = colliderComponent.getSize()
        const ratio = colliderHeight / colliderWidth
        const width = colliderWidth + dragDistance.x * direction.x
        const height = colliderHeight + (direction.x ? dragDistance.x * ratio : dragDistance.y) * direction.y
        colliderComponent.setSize(new Size({width, height}))
    }

    /**
     * Stop the move action
     */
    static stop(mouse, selectedUnits) {
        selectedUnits.map(unit => unit.getComponent(MeshComponent).setGenerated(false))
        return true
    }

}