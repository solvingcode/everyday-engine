define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class RotateUpMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'redo',
                title: 'Rotate',
                stateCode: 'ACTION_ROTATE_UP',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return RotateUpMenuItem

})