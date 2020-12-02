define(function (require) {

    const MenuItem = require('../../../MenuItem.js')
    const PlainBackgroundMenuItem = require('./PlainBackgroundMenuItem.js')
    const Layout = require('../../../Layout.js')

    /**
     * Plain terrain style Menu Item
     */
    class PlainStyleMenuItem extends MenuItem {
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

    return PlainStyleMenuItem

})