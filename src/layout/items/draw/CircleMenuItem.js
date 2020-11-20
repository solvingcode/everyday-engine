define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class CircleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'circle',
                title: 'Draw circle',
                stateCode: 'DRAW_CIRCLE',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return CircleMenuItem

})