define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class AttachPointMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'thumbtack',
                title: 'Pin joints',
                stateCode: 'DRAW_ATTACH_POINT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return AttachPointMenuItem

})