define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const PhysicsFormMenuItem = require('./PhysicsFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Entity Menu Item
     * Menu responsible for managing entity's props
     */
    class EntityMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Properties'
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

    return EntityMenuItem

})