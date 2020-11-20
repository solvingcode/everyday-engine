define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class RectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'stop',
                title: 'Draw a rectangle',
                stateCode: 'DRAW_RECT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return RectMenuItem

})