import Runner from '../Runner.js'
import World from '../../world/World.js'
import StateManager from '../../state/StateManager.js'
import UnitSelector from '../../selector/UnitSelector.js'
import Window from '../../core/Window.js'
import {KeyCode} from '../../core/Keyboard.js'
import Vector from '../../utils/Vector.js'
import MoveUnitAction from '../action/edit/MoveUnitAction.js'

export default class MoveUnitRunner extends Runner {

    /**
     * @type {MoveUnitRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return window.keyboard.isAnyKeyPressed() && StateManager.get().isStart('DRAW_MOVE')
    }

    /**
     * @override
     * @param {number} deltaTime
     */
    execute(deltaTime) {
        const world = World.get()
        const {keyboard} = Window.get()
        const stateManager = StateManager.get()
        const selectedUnits = UnitSelector.get().getSelected(world)
        const step = 1
        if (selectedUnits) {
            const direction = new Vector()
            if (keyboard.isKeyPressed(KeyCode.LEFT)) {
                direction.setX(-1)
            } else if (keyboard.isKeyPressed(KeyCode.RIGHT)) {
                direction.setX(1)
            }
            if (keyboard.isKeyPressed(KeyCode.UP)) {
                direction.setY(-1)
            } else if (keyboard.isKeyPressed(KeyCode.DOWN)) {
                direction.setY(1)
            }
            stateManager.startState(MoveUnitAction.STATE, 1, {units: selectedUnits, direction, step})
        }
    }
}
