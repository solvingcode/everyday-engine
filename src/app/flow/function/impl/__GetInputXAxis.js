import Window from '../../../core/Window.js'
import World from '../../../world/World.js'
import {GAME_INPUTS} from '../../../preference/gameInput/GameInput.js'

export default function () {
    const keyboard = Window.get().keyboard
    const gameInput = World.get().getPreference().getGameInput()
    let value = 0
    if(keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.RIGHT))){
        value = gameInput.get(GAME_INPUTS.RIGHT).getValue().getAttrValue()
    }else if(keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.LEFT))){
        value = gameInput.get(GAME_INPUTS.LEFT).getValue().getAttrValue()
    }
    return value
}