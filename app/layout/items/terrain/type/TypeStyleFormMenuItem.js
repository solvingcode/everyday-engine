define(function (require) {

    import MenuItem from '../../../MenuItem.js'
    import TypeBackgroundMenuItem from './TypeBackgroundMenuItem.js'
    import Layout from '../../../Layout.js'

    /**
     * Terrain style Menu Item
     */
    class TypeStyleMenuItem extends MenuItem {
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

    export default TypeStyleMenuItem

})