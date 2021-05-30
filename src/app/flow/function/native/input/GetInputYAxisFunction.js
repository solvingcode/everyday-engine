import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import {GAME_INPUTS} from '../../../../preference/gameInput/GameInput.js'
import World from '../../../../world/World.js'
import Window from '../../../../core/Window.js'

export default class GetInputYAxisFunction extends AFunction{

    constructor() {
        super('GetInputXAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry) {
        const keyboard = Window.get().keyboard
        const gameInput = World.get().getPreference().getGameInput()
        let value = 0
        if(keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP))){
            value = gameInput.get(GAME_INPUTS.UP).getValue().getAttrValue()
        }else if(keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))){
            value = gameInput.get(GAME_INPUTS.DOWN).getValue().getAttrValue()
        }
        this.setOutputValue(value)
    }
}