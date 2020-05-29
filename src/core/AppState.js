define(function (require) {

    const { MouseButton } = require('./Mouse.js')
    const Menu = require('../layout/Menu.js')

    class AppState {

        /**
         * Get the state of the application (drawing circle, 
         * starting/pausing simulation, moving object, ...).
         */
        getState() {
            const menu = Menu.get()
            const selectedItem = menu.getSelected()
            if (selectedItem) {
                return AppState.states.TO_DRAW
            }
        }

        /**
         * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
         * @param {Window} window 
         */
        applyActions(window) {
            const mouse = window.mouse
            const menu = Menu.get()
            if (mouse.isButtonPressed(MouseButton.LEFT)) {
                const menuItem = menu.getItemAt(mouse.position.x, mouse.position.y)
                if (menuItem) {
                    menu.selectItem(menuItem)
                }
            }
        }

        static get() {
            if (!AppState.instance) {
                AppState.instance = new AppState()
            }
            return AppState.instance
        }
    }

    AppState.instance = null
    AppState.states = {
        TO_DRAW: 0
    }

    return AppState
})