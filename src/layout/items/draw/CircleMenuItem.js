define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class CircleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'circle',
                title: 'Draw circle'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setDrawState('CIRCLE')
        }
        isSelected(){
            return this.hasDrawState('CIRCLE')
        }
    }

    return CircleMenuItem

})