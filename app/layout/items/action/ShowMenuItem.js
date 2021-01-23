define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Show selected entities
     */
    class ShowMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'eye',
                title: 'Show',
                stateCode: 'ACTION_SHOW',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return ShowMenuItem

})