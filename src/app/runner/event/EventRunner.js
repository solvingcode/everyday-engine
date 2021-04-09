import {MouseButton} from '../../core/Mouse.js'
import EventRegistry from '../../flow/event/EventRegistry.js'
import Runner from '../Runner.js'
import OnMouseClickEvent from '../../flow/event/native/OnMouseClickEvent.js'

export default class EventRunner extends Runner {

    /**
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const eventRegistry = EventRegistry.get()
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            eventRegistry.getClassInstance(OnMouseClickEvent).execute()
        }
    }

    isHandle(window) {
        return true
    }

}