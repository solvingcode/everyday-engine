import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import {MouseButton} from '../../core/Mouse.js'
import {GAME_INPUTS} from '../../preference/gameInput/GameInput.js'
import Window from '../../core/Window.js'
import UnitHelper from '../../utils/UnitHelper.js'
import {EEClass} from '../../compiler/EEClass.js'

export default class EEScriptExecutor extends ComponentExecutor {

    constructor() {
        super([ScriptComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const {mouse, keyboard} = Window.get()
        const world = World.get()
        const gameInput = world.getPreference().getGameInput()
        unit.findComponentsByClass(ScriptComponent)
            .filter(scriptComponent => scriptComponent.isEnabled())
            .forEach(scriptComponent => {
                if (world.getUnitManager().hasUnit(unit)) {
                    const className = scriptComponent.getScript()
                    const classCompiled = new EEClass[className]()
                    if (mouse.isButtonClicked(MouseButton.LEFT)) {
                        classCompiled.OnMouseClickEvent()
                    }
                    if (mouse.isButtonClicked(MouseButton.LEFT) && UnitHelper.isIntractableButton(world, unit) &&
                        UnitHelper.isInsideWindowPosition(world, unit, mouse.position)) {
                        classCompiled.OnButtonClick()
                    }
                    if (keyboard.isAnyKeyPressed()) {
                        classCompiled.OnKeyDown()
                    }
                    if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.RIGHT)) ||
                        keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.LEFT))) {
                        classCompiled.OnInputXAxis()
                    }
                    if (keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.UP)) ||
                        keyboard.isKeyPressed(gameInput.getKeyCode(GAME_INPUTS.DOWN))) {
                        classCompiled.OnInputYAxis()
                    }
                    if (keyboard.isKeyReleased(gameInput.getKeyCode(GAME_INPUTS.JUMP))) {
                        classCompiled.OnInputJump()
                    }
                    if (keyboard.isKeyReleased(gameInput.getKeyCode(GAME_INPUTS.ATTACK))) {
                        classCompiled.OnInputAttack()
                    }
                    if (!scriptComponent.isStarted() && scriptComponent.isInitialized()) {
                        classCompiled.OnStart()
                        scriptComponent.setStarted(true)
                    }
                    if (!scriptComponent.isInitialized()) {
                        classCompiled.OnInit()
                        scriptComponent.setInitialized(true)
                    }
                    classCompiled.OnUpdate()
                }
            })
    }

}