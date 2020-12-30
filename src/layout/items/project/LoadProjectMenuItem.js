define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * @class {LoadProjectMenuItem}
     */
    class LoadProjectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file-upload',
                title: 'Load project',
                stateCode: 'ACTION_LOAD_PROJECT',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return LoadProjectMenuItem

})