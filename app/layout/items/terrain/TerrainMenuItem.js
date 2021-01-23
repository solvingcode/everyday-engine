define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const ManagerFormMenuItem = require('./ManagerFormMenuItem.js')
    const TypeMenuItem = require('./type/TypeMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Terrain Menu Item
     * Menu responsible for managing terrains
     */
    class TerrainMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Terrain',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new ManagerFormMenuItem(this),
                new TypeMenuItem(this)
            ]
        }
    }

    return TerrainMenuItem

})