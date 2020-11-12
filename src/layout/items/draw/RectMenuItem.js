define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class RectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'stop',
                title: 'Draw a rectangle'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setDrawState('RECT')
        }
        isSelected(){
            return this.hasDrawState('RECT')
        }
    }

    return RectMenuItem

})