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
        run() { }
        isSelected() {
            return false
        }
        loadItems() {
            const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF']
            this.items = colors.map(color => new StyleColorMenuItem(this, color))
        }
    }

    return StyleMenuItem

})