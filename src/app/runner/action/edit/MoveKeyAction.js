import Action from '../Action.js'
import StateHelper from '../../../utils/StateHelper.js'
import Vector from '../../../utils/Vector.js'
import {KeyCode} from '../../../core/Keyboard.js'
import Window from '../../../core/Window.js'

export default class MoveKeyAction extends Action {

    static STATE = 'ACTION_MOVE_KEY'

    /**
     * @override
     */
    static run() {
        const {keyboard} = Window.get()
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
        const step = keyboard.isKeyPressed(KeyCode.SHIFT) ? new Vector({x: 10, y: 10}) : new Vector({x: 1, y: 1})
        StateHelper.startMoveSectionState({direction, step})
        return true
    }

}