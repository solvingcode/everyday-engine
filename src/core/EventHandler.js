define(function (require) {

    const { MouseButton } = require('./Mouse.js')
    const Menu = require('../layout/Menu.js')
    const Action = require('./Action.js')

    class EventHandler {

        /**
         * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
         * @param {Window} window 
         */
        handle(window) {
            const mouse = window.mouse
            const action = Action.get()
            const menu = Menu.get()
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                action.add(menu, mouse.position)
            }
            action.run()
        }

        static get() {
            if (!EventHandler.instance) {
                EventHandler.instance = new EventHandler()
            }
            return EventHandler.instance
        }
    }

    EventHandler.instance = null

    return EventHandler
})