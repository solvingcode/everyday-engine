import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import Window from '../../../core/Window.js'
import {KeyCode} from '../../../core/Keyboard.js'

export default class SelectLayerAction extends Action {

    static STATE = 'ACTION_SELECT_LAYER_ELEMENT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {keyboard} = Window.get()
        const {bind, list} = StateManager.get().getNextProgressData(this.STATE)
        let elemToSelect = [bind]
        const selectedUnit = world.getUnitManager().getSelected()
        const indexSelected = list.findIndex(unit => unit === selectedUnit)
        const indexToSelected = list.findIndex(unit => unit === bind)
        if (keyboard.isKeyPressed(KeyCode.SHIFT)) {
            const startIndex = Math.min(indexSelected, indexToSelected)
            const endIndex = Math.max(indexSelected, indexToSelected)
            elemToSelect = list.slice(startIndex, endIndex + 1)
        }
        world.getSceneManager().unSelectAll()
        UnitSelector.get().unselectAll(World.get())
        elemToSelect.forEach(element => {
            element.select()
        })
        return true
    }

}