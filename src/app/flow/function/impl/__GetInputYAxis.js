import World from '../../../world/World.js'
import Window from '../../../core/Window.js'
import {GAME_INPUTS} from '../../../preference/gameInput/GameInput.js'

export default function () {
    const keyboard = Window.get().keyboard
    const gameInput = World.get().getPreference().getGameInput()
    let value = 0
    if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP))) {
        value = gameInput.get(GAME_INPUTS.UP).getValue().getAttrValue()
    } else if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))) {
        value = gameInput.get(GAME_INPUTS.DOWN).getValue().getAttrValue()
    }
    return value
}