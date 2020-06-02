define(function (require) {

    const AppState = require('../core/AppState.js')
    const CircleDrawer = require('./items/CircleDrawer.js')

    class Drawer {

        /**
         * Execute draw action for each type of item (Circle, Rect, ...)
         * @param {position} position 
         */
        execute(position) {
            const appState = AppState.get()
            if (appState.hasState('TO_DRAW_CIRCLE')) {
                CircleDrawer.draw(position)
            }
        }

        static get() {
            if (!Drawer.instance) {
                Drawer.instance = new Drawer()
            }
            return Drawer.instance
        }
    }

    Drawer.instance = null

    return Drawer
})