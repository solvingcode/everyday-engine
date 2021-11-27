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
import OnButtonClickEvent from '../../flow/event/native/OnButtonClickEvent.js'
import UnitHelper from '../../utils/UnitHelper.js'
import OnStartEvent from '../../flow/event/native/OnStartEvent.js'
import OnInitEvent from '../../flow/event/native/OnInitEvent.js'

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
        unit.findComponentsByClass(ScriptComponent)
            .filter(scriptComponent => scriptComponent.isEnabled())
            .forEach(scriptComponent => {
                const className = scriptComponent.getScript()
                functionRegistry.getInstancesByClass(className).forEach(instance => {
                    if (
                        (mouse.isButtonClicked(MouseButton.LEFT) && instance instanceof OnMouseClickEvent) ||

                        (mouse.isButtonClicked(MouseButton.LEFT) && instance instanceof OnButtonClickEvent &&
                            UnitHelper.isIntractableButton(world, unit) &&
                            UnitHelper.isInsideWindowPosition(world, unit, mouse.position)) ||

                        (keyboard.isAnyKeyPressed() && instance instanceof OnKeyDownEvent) ||

                        ((keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.RIGHT)) ||
                            keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.LEFT))) && instance instanceof OnInputXAxisEvent) ||

                        ((keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP)) ||
                            keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))) && instance instanceof OnInputYAxisEvent) ||

                        (keyboard.isKeyReleased(gameInput.getKeyCode(GAME_INPUTS.JUMP)) && instance instanceof OnInputJumpEvent) ||

                        (keyboard.isKeyReleased(gameInput.getKeyCode(GAME_INPUTS.ATTACK)) && instance instanceof OnInputAttackEvent) ||

                        instance instanceof OnUpdateEvent ||

                        (instance instanceof OnStartEvent && !scriptComponent.isStarted() && scriptComponent.isInitialized()) ||

                        (instance instanceof OnInitEvent && !scriptComponent.isInitialized())
                    ) {
                        instance.execute(functionRegistry, unit, scriptComponent, world, executionContext)
                        if (instance instanceof OnStartEvent) {
                            scriptComponent.setStarted(true)
                        }
                        if (instance instanceof OnInitEvent) {
                            scriptComponent.setInitialized(true)
                        }
                    }
                })
            })
    }

}