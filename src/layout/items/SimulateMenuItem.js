define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class SimulateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Simulate'
            })
        }
        run() {
            this.appState.removeAllState()
            this.setSimulateState('START')
        }
        stop() {
            this.setSimulateState('STOP')
        }
    }

    return SimulateMenuItem

})