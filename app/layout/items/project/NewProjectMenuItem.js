define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Create new project
     */
    class NewProjectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file',
                title: 'New project',
                stateCode: 'ACTION_NEW_PROJECT',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return NewProjectMenuItem

})