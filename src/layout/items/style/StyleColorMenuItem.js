define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class StyleColorMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Color'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.STYLE_COLOR
        }
        run() {
            this.setActionState('STYLE_COLOR', 'START')
            this.setDataState(this.data)
        }
        isSelected() {
            return this.hasDataState(this.data)
        }
    }

    return StyleColorMenuItem

})