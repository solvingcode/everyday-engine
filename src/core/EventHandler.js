define(function (require) {

    const { MouseButton } = require('./Mouse.js')
    const Menu = require('../layout/Menu.js')
    const MenuRunner = require('../runner/menu/MenuRunner.js')
    const Action = require('./Action.js')
    const DrawerRunner = require('../runner/drawer/DrawerRunner.js')
    const SimulateRunner = require('../runner/simulate/SimulateRunner.js')
    const ActionRunner = require('../runner/action/ActionRunner.js')
    const WindowRunner = require('../runner/window/WindowRunner.js')
    const ConstraintRunner = require('../runner/constraint/ConstraintRunner.js')
    const WorldRunner = require('../runner/world/WorldRunner.js')

    /**
     * Handle global events triggered by the user (click , mouse move)
     * and define related action (Runner) to be executed
     */
    class EventHandler {

        /**
         * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
         * @param {Window} window 
         */
        handle(window) {
            const mouse = window.mouse
            const action = Action.get()
            const menu = Menu.get()
            const menuRunner = MenuRunner.get(Menu.get())
            const drawerRunner = DrawerRunner.get()
            const simulateRunner = SimulateRunner.get()
            const actionRunner = ActionRunner.get()
            const windowRunner = WindowRunner.get()
            const constraintRunner = ConstraintRunner.get()
            const worldRunner = WorldRunner.get()
            action.add(simulateRunner, mouse)
            action.add(actionRunner, mouse)
            action.add(constraintRunner, mouse)
            action.add(worldRunner, mouse)
            if (mouse.isButtonClicked(MouseButton.LEFT)) {
                action.add(menuRunner, mouse)
            }
            if (mouse.isMouseMove()) {
                action.add(windowRunner, mouse)
                action.add(drawerRunner, mouse, menu)
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