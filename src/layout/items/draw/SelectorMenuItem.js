define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SelectorMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'mouse-pointer',
                title: 'Select/Move'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setDrawState('SELECT')
        }
        isSelected(){
            return this.hasDrawState('SELECT')
        }
    }

    return SelectorMenuItem

})