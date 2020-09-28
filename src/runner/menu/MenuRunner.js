define(function (require) {

    const Runner = require('../Runner.js')
    const ButtonUI = require('../../renderer/ui/canvas/buttons/ButtonUI.js')

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
            const menuItem = this.getItemAt(position.x, position.y)
            if (menuItem) {
                this.menu.selectItem(menuItem)
                return true
            }
            return false
        }

        /**
         * Get MenuItem at a specific position.
         * @param {float} x 
         * @param {float} y 
         * @todo See if we can use isValid instead of checking position exists
         */
        getItemAt(x, y) {
            return this.menu.items.find((item) => item.position &&
                x > item.position.x && x < item.position.x + ButtonUI.getProps(item.element).width &&
                y > item.position.y && y < item.position.y + ButtonUI.getProps(item.element).height
            )
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