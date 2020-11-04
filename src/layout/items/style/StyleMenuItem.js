define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const StyleColorMenuItem = require('./StyleColorMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Style menu item
     * Style panel for entities styling (color, ...)
     */
    class StyleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Style'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.PANEL
            this.loadItems()
        }
        
        /**
         * @inherit
         */
        run() {
            return false
        }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }

        /**
         * Load sub items for the menu item
         */
        loadItems() {
            const colors = ['', '#FF0000', '#00FF00', '#0000FF', '#FFFFFF',
                '#FF00FF', '#FFFF00', '#00FFFF', '#000000', '#F0F0FF']
            this.items = colors.map(color => new StyleColorMenuItem(this, { color }))
        }
    }

    return StyleMenuItem

})