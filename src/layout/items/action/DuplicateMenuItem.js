define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class DuplicateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'copy',
                title: 'Duplicate',
                stateCode: 'ACTION_DUPLICATE',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return DuplicateMenuItem

})