define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Hide selected entities
     */
    class HideMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'eye-slash',
                title: 'Hide',
                stateCode: 'ACTION_HIDE',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return HideMenuItem

})