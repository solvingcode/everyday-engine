define(function (require) {

    const MenuItem = require('../../../MenuItem.js')
    const TypePosFormMenuItem = require('./TypePosFormMenuItem.js')
    const TypeSizeFormMenuItem = require('./TypeSizeFormMenuItem.js')
    const TypeStyleFormMenuItem = require('./TypeStyleFormMenuItem.js')
    const TypeNoiseFormMenuItem = require('./TypeNoiseFormMenuItem.js')
    const Layout = require('../../../Layout.js')

    /**
     * Terrain Menu Item
     */
    class TypeMenuItem extends MenuItem {
        constructor(parent) {
            super({
                name: '',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: parent.zone
            })
            this.parent = parent
            this.items = [
                new TypePosFormMenuItem(this),
                new TypeSizeFormMenuItem(this),
                new TypeStyleFormMenuItem(this),
                new TypeNoiseFormMenuItem(this)
            ]
        }
    }

    return TypeMenuItem

})