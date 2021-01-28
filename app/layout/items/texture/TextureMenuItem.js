define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import AddTextureFormMenuItem from './AddTextureFormMenuItem.js'
    import UpdateTextureFormMenuItem from './UpdateTextureFormMenuItem.js'
    import ListTextureFormMenuItem from './ListTextureFormMenuItem.js'
    import Layout from '../../Layout.js'

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

    export default TextureMenuItem

})