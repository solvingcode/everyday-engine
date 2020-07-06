define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class SimulateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Simulate'
            })
        }
        run() {
            if(this.isSelected()){
                this.setSimulateState('START')
            }else{
                this.setSimulateState('STOP')
            }
        }
    }

    return SimulateMenuItem

})