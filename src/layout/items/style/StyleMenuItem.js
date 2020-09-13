define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const StyleColorMenuItem = require('./StyleColorMenuItem.js')
    const Layout = require('../../Layout.js')

    class StyleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Style'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.STYLE
            this.loadItems()
        }
        run() {
            return false
        }
        isSelected() {
            return false
        }
        loadItems() {
            const colors = ['', '#FF0000', '#00FF00', '#0000FF', '#FFFFFF',
                '#FF00FF', '#FFFF00', '#00FFFF', '#FFF000', '#F0F0FF']
            this.items = colors.map(color => new StyleColorMenuItem(this, { color }))
        }
    }

    return StyleMenuItem

})