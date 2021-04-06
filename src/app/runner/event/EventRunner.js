import {MouseButton} from '../../core/Mouse.js'
import EventRegistry from '../../flow/event/EventRegistry.js'
import Runner from '../Runner.js'

export default class EventRunner extends Runner {

    /**
     * @param {Mouse} mouse
     */
    execute(mouse) {
        const eventRegistry = EventRegistry.get()
        if (mouse.isButtonPressed(MouseButton.LEFT)) {
            eventRegistry.getEvent('OnMouseClickEvent').execute()
        }
    }

    isHandle(window) {
        return true
    }
}