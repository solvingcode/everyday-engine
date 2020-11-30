define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const FormMenuItem = require('./ConditionFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Condition Menu Item
     * Menu responsible for managing physics and ai conditions (when die, ...)
     */
    class ConditionMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Conditions',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new FormMenuItem(this)
            ]
        }
        /**
         * @override
         */
        update() {
            this.items.forEach(item => item.isValid() && item.update())
        }
    }

    return ConditionMenuItem

})