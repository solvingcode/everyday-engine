define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class SimulateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'play',
                title: 'Start the simulation'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.appState.removeAllState()
            this.setSimulateState('START')
        }
        stop() {
            this.setSimulateState('STOP')
        }
        isSelected(){
            return this.hasSimulateState()
        }
    }

    return SimulateMenuItem

})