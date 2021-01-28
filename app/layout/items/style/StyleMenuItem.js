define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import TextureFormMenuItem from './TextureFormMenuItem.js'
    import Layout from '../../Layout.js'

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
                new TextureFormMenuItem(this)
            ]
        }
    }

    export default StyleMenuItem

})