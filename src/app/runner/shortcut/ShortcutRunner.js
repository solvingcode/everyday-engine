import Runner from '../Runner.js'
import {KeyCode} from '../../core/Keyboard.js'
import Window from '../../core/Window.js'
import StateManager from '../../state/StateManager.js'

export class ShortcutRunner extends Runner {

    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return window.keyboard.isAnyKeyPressed() || window.keyboard.isAnyKeyReleased()
    }

    /**
     * @override
     */
    execute() {
        const {keyboard} = Window.get()
        const stateManager = StateManager.get()
        if (keyboard.isKeyReleased(KeyCode.A)) {
            stateManager.stopDrawStates()
            stateManager.startState('DRAW_SELECT', 1, {unit: null})
        } else if (keyboard.isKeyReleased(KeyCode.G)) {
            stateManager.stopDrawStates()
            stateManager.startState('DRAW_MOVE', 1, {unit: null})
        } else if (keyboard.isKeyReleased(KeyCode.S)) {
            stateManager.stopDrawStates()
            stateManager.startState('DRAW_SCALE', 1, {unit: null})
        } else if (keyboard.isKeyReleased(KeyCode.R)) {
            stateManager.stopDrawStates()
            stateManager.startState('DRAW_ROTATE', 1, {unit: null})
        } else if (keyboard.isKeyReleased(KeyCode.DELETE)) {
            stateManager.startState('ACTION_DELETE', 1)
        } else if (keyboard.isKeyPressed(KeyCode.CTRL) && keyboard.isKeyReleased(KeyCode.C)) {
            stateManager.startState('ACTION_COPY', 1)
        }
    }

    static get() {
        if (!ShortcutRunner.instance) {
            ShortcutRunner.instance = new ShortcutRunner()
        }
        return ShortcutRunner.instance
    }
}