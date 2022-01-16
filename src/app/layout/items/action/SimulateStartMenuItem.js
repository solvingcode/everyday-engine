import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class SimulateStartMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'play',
            title: 'Start the simulation',
            stateCode: 'SIMULATE',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default SimulateStartMenuItem