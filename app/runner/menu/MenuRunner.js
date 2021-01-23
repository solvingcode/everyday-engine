define(function (require) {

    const Runner = require('../Runner.js')
    const Menu = require('../../layout/Menu.js')
    const { MouseButton } = require('../../core/Mouse.js')

    /**
     * Execute actions related to menu items
     * @property {Menu} menu
     */
    class MenuRunner extends Runner {

        constructor() {
            super()
            this.menu = Menu.get()
        }

        /**
         * @override
         */
        isHandle(window){
            return window.mouse.isButtonClicked(MouseButton.LEFT)
        }

        /**
         * Apply action for the menu.
         * @param {Mouse} mouse 
         * @return {Boolean}
         */
        execute(mouse) {
            const menuItem = this.menu.getUIRenderer().getItemAt(mouse)
            this.menu.selectItem(menuItem)
            return !!menuItem;
        }
    }

    MenuRunner.instance = null

    return MenuRunner
})