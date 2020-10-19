define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const PhysicsFormMenuItem = require('./PhysicsFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Physics Menu Item
     * Menu responsible for managing Physics
     */
    class PhysicsMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Physics'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.PANEL
            this.items = [
                new PhysicsFormMenuItem(this)
            ]
        }

        /**
         * @inheritdoc
         */
        run() {
            return false
        }

        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }

        /**
         * @inheritdoc
         */
        update() {
            this.items.forEach(item => item.isValid() && item.update())
        }
    }

    return PhysicsMenuItem

})