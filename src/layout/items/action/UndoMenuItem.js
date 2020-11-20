define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class UndoMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'undo',
                title: 'Undo',
                stateCode: 'ACTION_UNDO',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return UndoMenuItem

})