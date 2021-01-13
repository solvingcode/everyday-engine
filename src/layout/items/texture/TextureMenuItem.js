define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const AddTextureFormMenuItem = require('./AddTextureFormMenuItem.js')
    const UpdateTextureFormMenuItem = require('./UpdateTextureFormMenuItem.js')
    const ListTextureFormMenuItem = require('./ListTextureFormMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * @class {TextureMenuItem}
     * Menu responsible for managing textures
     */
    class TextureMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Textures',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new AddTextureFormMenuItem(this),
                new ListTextureFormMenuItem(this),
                new UpdateTextureFormMenuItem(this)
            ]
        }
    }

    return TextureMenuItem

})