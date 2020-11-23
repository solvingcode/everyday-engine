define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const PropsFormMenuItem = require('./PropsFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Entity Menu Item
     * Menu responsible for managing entity's props
     */
    class EntityMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Properties',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new PropsFormMenuItem(this)
            ]
        }
    }

    return EntityMenuItem

})