define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

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

    export default SimulateMenuItem

})