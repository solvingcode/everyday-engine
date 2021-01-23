define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Move down entities in z-index
     */
    class MoveDownMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'arrow-down',
                title: 'Move down',
                stateCode: 'ACTION_MOVE_DOWN',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return MoveDownMenuItem

})