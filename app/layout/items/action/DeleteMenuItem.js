define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class DeleteMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'trash-alt',
                title: 'Delete',
                stateCode: 'ACTION_DELETE',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    return DeleteMenuItem

})