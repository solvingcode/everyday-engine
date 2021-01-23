define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Lock entities for modification (move, attach, ...)
     */
    class UnlockMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'unlock',
                title: 'Unlock',
                stateCode: 'ACTION_UNLOCK',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return UnlockMenuItem

})