define(function (require) {

    const MenuItem = require('../../../MenuItem.js')
    const PlainBackgroundMenuItem = require('./TypeBackgroundMenuItem.js')
    const Layout = require('../../../Layout.js')

    /**
     * Terrain style Menu Item
     */
    class TypeStyleMenuItem extends MenuItem {
        constructor(parent) {
            super({
                name: '',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: parent.zone
            })
            this.parent = parent
            this.items = [
                new PlainBackgroundMenuItem(this)
            ]
        }
    }

    return TypeStyleMenuItem

})