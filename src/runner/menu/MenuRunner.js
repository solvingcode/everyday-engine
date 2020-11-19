define(function (require) {

    const Runner = require('../Runner.js')

    /**
     * Execute actions related to menu items
     * @property {Menu} menu
     */
    class MenuRunner extends Runner {

        constructor(menu) {
            super()
            this.menu = menu
        }

        /**
         * Apply action for the menu.
         * @param {Mouse} mouse 
         * @return {Boolean}
         */
        execute(mouse) {
            const menuItem = this.menu.getUIRenderer().getItemAt(mouse)
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