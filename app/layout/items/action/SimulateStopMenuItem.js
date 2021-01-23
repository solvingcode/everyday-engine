define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SimulateStopMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'stop-circle',
                title: 'Stop the simulation',
                stateCode: 'SIMULATE',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }

        /**
         * @override
         */
        isValid() {
            return this.stateManager.isRunning()
        }
    }

    return SimulateStopMenuItem

})