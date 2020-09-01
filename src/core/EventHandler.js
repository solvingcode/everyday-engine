define(function (require) {

    const { MouseButton } = require('./Mouse.js')
    const Menu = require('../layout/Menu.js')
    const Action = require('./Action.js')
    const DrawerRunner = require('../runner/DrawerRunner.js')
    const SimulateRunner = require('../runner/SimulateRunner.js')

    class EventHandler {

        /**
         * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
         * @param {Window} window 
         */
        handle(window) {
            const mouse = window.mouse
            const action = Action.get()
            const menu = Menu.get()
            const drawer = DrawerRunner.get()
            const simulate = SimulateRunner.get()
            action.add(simulate, mouse)
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                action.add(menu, mouse.position)
            }
            if (mouse.isMouseMove()) {
                action.add(drawer, mouse)
            }
            action.run()
            mouse.clearKeyClicked()
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