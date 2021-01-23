define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Lock entities for modification (move, attach, ...)
     */
    class LockMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'lock',
                title: 'Lock',
                stateCode: 'ACTION_LOCK',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return LockMenuItem

})