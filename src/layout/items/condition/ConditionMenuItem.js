define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const FormMenuItem = require('./FormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Condition Menu Item
     * Menu responsible for managing physics and ai conditions (when die, ...)
     */
    class ConditionMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Conditions'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.PANEL
            this.items = [
                new FormMenuItem(this)
            ]
        }

        /**
         * @inherit
         */
        run() {
            return false
        }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }

        /**
         * @inherit
         */
        update() {
            this.items.forEach(item => item.isValid() && item.update())
        }
    }

    return ConditionMenuItem

})