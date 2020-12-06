define(function (require) {

    const MenuItem = require('../../../MenuItem.js')
    const PlainPosFormMenuItem = require('./PlainPosFormMenuItem.js')
    const PlainSizeFormMenuItem = require('./PlainSizeFormMenuItem.js')
    const PlainStyleMenuItem = require('./PlainStyleMenuItem.js')
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
                new PlainPosFormMenuItem(this),
                new PlainSizeFormMenuItem(this),
                new PlainStyleMenuItem(this)
            ]
        }
    }

    return PlainMenuItem

})