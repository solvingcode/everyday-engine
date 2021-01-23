define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * @class {ExportProjectMenuItem}
     */
    class ExportProjectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file-export',
                title: 'Export project',
                stateCode: 'ACTION_EXPORT_PROJECT',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return ExportProjectMenuItem

})