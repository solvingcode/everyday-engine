import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import {MouseButton} from '../../core/Mouse.js'
import OnMouseClickEvent from '../../flow/event/native/OnMouseClickEvent.js'
import OnKeyDownEvent from '../../flow/event/native/OnKeyDownEvent.js'
import {GAME_INPUTS} from '../../preference/gameInput/GameInput.js'
import OnInputXAxisEvent from '../../flow/event/native/OnInputXAxisEvent.js'
import OnInputYAxisEvent from '../../flow/event/native/OnInputYAxisEvent.js'
import OnInputJumpEvent from '../../flow/event/native/OnInputJumpEvent.js'
import Window from '../../core/Window.js'
import OnUpdateEvent from '../../flow/event/native/OnUpdateEvent.js'
import OnInputAttackEvent from '../../flow/event/native/OnInputAttackEvent.js'

export default class ScriptExecutor extends ComponentExecutor {

    constructor() {
        super([ScriptComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const {mouse, keyboard} = Window.get()
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        const gameInput = world.getPreference().getGameInput()
        const scriptComponent = unit.getComponent(ScriptComponent)
        functionRegistry.getInstancesByClass(scriptComponent.getScript()).forEach(instance => {
            if (
                (mouse.isButtonClicked(MouseButton.LEFT) && instance instanceof OnMouseClickEvent) ||

                (keyboard.isAnyKeyPressed() && instance instanceof OnKeyDownEvent) ||

                ((keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.RIGHT)) ||
                    keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.LEFT))) && instance instanceof OnInputXAxisEvent) ||

                ((keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP)) ||
                    keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))) && instance instanceof OnInputYAxisEvent) ||

                (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.JUMP)) && instance instanceof OnInputJumpEvent) ||

                (keyboard.isKeyReleased(gameInput.getKeyCode(GAME_INPUTS.ATTACK)) && instance instanceof OnInputAttackEvent) ||

                instance instanceof OnUpdateEvent
            ) {
                instance.execute(functionRegistry, unit, scriptComponent, world)
            }
        })
    }

}