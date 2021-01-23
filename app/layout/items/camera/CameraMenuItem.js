define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const PropsFormMenuItem = require('./PropsFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Menu responsible for managing camera properties
     */
    class CameraMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Camera',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new PropsFormMenuItem(this)
            ]
        }
    }

    return CameraMenuItem

})