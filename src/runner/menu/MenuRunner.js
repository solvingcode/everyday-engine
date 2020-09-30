define(function (require) {

    const Runner = require('../Runner.js')

    class MenuRunner extends Runner {

        constructor(menu) {
            super()
            this.menu = menu
        }

        /**
         * Apply action for the menu.
         * @param {Object} position 
         * @return {Boolean}
         */
        execute(position) {
            const menuItem = this.menu.getItemAt(position.x, position.y)
            if (menuItem) {
                this.menu.selectItem(menuItem)
                return true
            }
            return false
        }

        /**
         * @param {Menu} menu 
         */
        static get(menu) {
            if (!MenuRunner.instance) {
                MenuRunner.instance = new MenuRunner(menu)
            }
            return MenuRunner.instance
        }
    }

    MenuRunner.instance = null

    return MenuRunner
})