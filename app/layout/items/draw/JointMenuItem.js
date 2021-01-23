define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class JointMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'bone',
                title: 'Rigid joints',
                stateCode: 'DRAW_JOINT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return JointMenuItem

})