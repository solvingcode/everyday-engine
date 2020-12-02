define(function (require) {

    const MenuItem = require('../../../MenuItem.js')
    const PlainFormMenuItem = require('./PlainFormMenuItem.js')
    const PlainBackgroundMenuItem = require('./PlainBackgroundMenuItem.js')
    const Layout = require('../../../Layout.js')

    /**
     * Plain terrain Menu Item
     */
    class PlainMenuItem extends MenuItem {
        constructor(parent) {
            super({
                name: '',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: parent.zone
            })
            this.parent = parent
            this.items = [
                new PlainFormMenuItem(this),
                new PlainBackgroundMenuItem(this)
            ]
        }
    }

    return PlainMenuItem

})