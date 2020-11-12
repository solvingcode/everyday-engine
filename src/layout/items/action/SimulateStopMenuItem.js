define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SimulateStopMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'stop-circle',
                title: 'Stop the simulation'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setSimulateState('STOP')
        }
        isSelected() {
            return false
        }
        isValid() {
            return this.appState.hasState('SIMULATE_PROGRESS')
        }
    }

    return SimulateStopMenuItem

})