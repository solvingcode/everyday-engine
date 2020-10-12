define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class SimulateStopMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Stop'
            })
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