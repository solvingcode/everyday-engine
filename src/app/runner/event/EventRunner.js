import {MouseButton} from '../../core/Mouse.js'
import Runner from '../Runner.js'
import OnMouseClickEvent from '../../flow/event/native/OnMouseClickEvent.js'
import World from '../../world/World.js'
import OnKeyDownEvent from '../../flow/event/native/OnKeyDownEvent.js'
import {GAME_INPUTS} from '../../preference/gameInput/GameInput.js'
import OnInputXAxisEvent from '../../flow/event/native/OnInputXAxisEvent.js'
import OnInputYAxisEvent from '../../flow/event/native/OnInputYAxisEvent.js'
import OnInputJumpEvent from '../../flow/event/native/OnInputJumpEvent.js'

export default class EventRunner extends Runner {

    /**
     * @param {Mouse} mouse
     * @param {Keyboard} keyboard
     */
    execute(mouse, keyboard) {
        const functionRegistry = World.get().getFunctionRegistry()
        const gameInput = World.get().getPreference().getGameInput()
        if (mouse.isButtonClicked(MouseButton.LEFT)) {
            functionRegistry.getClassInstance(OnMouseClickEvent).forEach(event => event.execute(functionRegistry))
        }
        if (keyboard.isAnyKeyPressed()) {
            functionRegistry.getClassInstance(OnKeyDownEvent).forEach(event => event.execute(functionRegistry))
        }
        if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.RIGHT)) ||
            keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.LEFT))
        ){
            functionRegistry.getClassInstance(OnInputXAxisEvent).forEach(event => event.execute(functionRegistry))
        }
        if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP)) ||
            keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))
        ){
            functionRegistry.getClassInstance(OnInputYAxisEvent).forEach(event => event.execute(functionRegistry))
        }
        if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.JUMP))
        ){
            functionRegistry.getClassInstance(OnInputJumpEvent).forEach(event => event.execute(functionRegistry))
        }
    }

    isHandle(window) {
        return true
    }

}