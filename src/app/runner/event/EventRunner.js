import {MouseButton} from '../../core/Mouse.js'
import Runner from '../Runner.js'
import OnMouseClickEvent from '../../flow/event/native/OnMouseClickEvent.js'
import World from '../../world/World.js'

export default class EventRunner extends Runner {

    /**
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const functionRegistry = World.get().getFunctionRegistry()
        if (mouse.isButtonClicked(MouseButton.LEFT)) {
            functionRegistry.getClassInstance(OnMouseClickEvent).forEach(event => event.execute(functionRegistry))
        }
    }

    isHandle(window) {
        return true
    }

}