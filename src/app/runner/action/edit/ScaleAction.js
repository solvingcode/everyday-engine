import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import Size from '../../../pobject/Size.js'
import GUIScaleFreeComponent from '../../../component/gui/scale/GUIScaleFreeComponent.js'
import GUIScaleXComponent from '../../../component/gui/scale/GUIScaleXComponent.js'
import GUIScaleYComponent from '../../../component/gui/scale/GUIScaleYComponent.js'
import MeshComponent from '../../../component/MeshComponent.js'

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
            this.scaleUnits(mouse, selectedUnits, direction)
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
            const width = meshComponent.getSize().getWidth() + dragDistance.x * direction.x
            const height = meshComponent.getSize().getHeight() + (direction.x ? dragDistance.x : dragDistance.y) * direction.y
            meshComponent.setSize(new Size({width, height}))
            meshComponent.setGenerated(false)
        })
    }

    /**
     * Stop the move action
     */
    static stop(mouse, selectedUnits) {
        selectedUnits.map(unit => unit.getComponent(MeshComponent).setGenerated(false))
        return true
    }

}