define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SelectorMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'mouse-pointer',
                title: 'Select/Move',
                stateCode: 'DRAW_SELECT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return SelectorMenuItem

})