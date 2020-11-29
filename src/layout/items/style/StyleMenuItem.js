define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const BackgroundFormMenuItem = require('./BackgroundFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Style Menu Item
     * Menu responsible for managing entity's styles
     */
    class StyleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Style',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new BackgroundFormMenuItem(this)
            ]
        }
    }

    return StyleMenuItem

})