define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SimulateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'play',
                title: 'Start the simulation',
                stateCode: 'SIMULATE',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    return SimulateMenuItem

})