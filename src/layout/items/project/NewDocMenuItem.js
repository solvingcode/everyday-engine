define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Create new document
     */
    class NewDocMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file',
                title: 'New project',
                stateCode: 'ACTION_NEW_DOC',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return NewDocMenuItem

})